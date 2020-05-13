export const QUERY_DATA = 'queryData';

export default (store) => (next) => async (action) => {
  // 判断传入的action是否为queryData类型的
  // 如果不是，则继续向下传递
  const queryAction = action[QUERY_DATA];
  if (!queryAction) {
    return next(action);
  }

  // 将action的其他参数传入之后的中间件(剔除掉queryData属性--后续用不到了)
  const withAction = (data) => {
    let finalAction = { ...data, ...action };
    delete finalAction[QUERY_DATA];
    return finalAction;
  };

  // 解析queryData中的参数
  const { reducers, api, apiParams } = queryAction;
  const { reducerRequest, reducerSuccess, reducerFailure } = reducers;

  // 开始请求
  next(withAction(reducerRequest()));

  try {
    const res = await api(apiParams);
    // 成功时，在action中添加queryResult特殊属性，便于reducer根据action中的属性来做通用处理
    next(withAction(reducerSuccess(res)));
  } catch (err) {
    // 失败时，在action中添加error属性，这样app的reducer判断存在error则自动调用reducer将异常写入app state
    next(withAction(reducerFailure(err.toString())));
  }
};
