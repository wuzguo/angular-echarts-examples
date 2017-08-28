
package com.github.wuzguo.impl;

import com.github.wuzguo.service.IUserStatService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * TODO 用户类相关的数据统计的接口
 *
 * @author wuzguo at 2017/6/29 14:54
 */
@Service
public class UserStatService implements IUserStatService {
    // 日志
    private static final Logger LOGGER = LoggerFactory.getLogger(UserStatService.class);

    // 用户来源渠道字典
    private static final Map<String, String> mapDict = new HashMap<String, String>() {
        {
            put("0", "PC");
            put("1", "触屏");
            put("10", "安卓");
            put("12", "IOS");
            put("13", "微信");
        }
    };


    /**
     * 统计平台每天的注册用户数，以小时为单位聚合
     *
     * @param indices the indices
     * @return
     */
    @Override
    public Map<String, Map<String, Integer>> registUser(String... indices) {

        // 首先创建空的对象
        Map<String, Map<String, Integer>> mapDevice = new HashMap<String, Map<String, Integer>>(8) {
            {
                put("PC", null);
                put("触屏", null);
                put("安卓", null);
                put("IOS", null);
                put("微信", null);
            }
        };

        // ... 省略 elasticSearch的查询操作

        // 给空的对象赋默认值，避免前端出现空值
        Iterator<Map.Entry<String, Map<String, Integer>>> iterator = mapDevice.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Map<String, Integer>> next = iterator.next();
            if (next.getValue() == null) {
                next.setValue(new HashMap<String, Integer>(24 * 3 / 2 + 1) {
                    {
                        put("0", 0);
                        put("1", 0);
                        put("2", 0);
                        put("3", 0);
                        put("4", 0);
                        put("5", 0);
                        put("6", 0);
                        put("7", 0);
                        put("8", 0);
                        put("9", 0);
                        put("10", 0);
                        put("11", 0);
                        put("12", 0);
                        put("13", 0);
                        put("14", 0);
                        put("15", 0);
                        put("16", 0);
                        put("17", 0);
                        put("18", 0);
                        put("19", 0);
                        put("20", 0);
                        put("21", 0);
                        put("22", 0);
                        put("23", 0);
                    }
                });
            }
        }
        // 返回值
        return mapDevice;
    }
}
