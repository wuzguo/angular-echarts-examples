
package com.github.wuzguo.service;


import java.util.Map;

/**
 * TODO 用户类相关的数据统计的接口
 *
 * @author wuzguo at 2017/6/29 14:44
 */
public interface IUserStatService {

    /**
     * 统计每天的平台注册用户，以小时为单位聚合
     *
     * @param indices the indices
     * @return map
     */
    Map<String, Map<String, Integer>> registUser(String... indices);

}
