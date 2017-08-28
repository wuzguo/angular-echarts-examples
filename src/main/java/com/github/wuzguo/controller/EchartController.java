
package com.github.wuzguo.controller;


import com.github.wuzguo.model.Result;
import com.github.wuzguo.service.IUserStatService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Map;


/**
 * TODO 各种图表展示数据接口实现
 * 添加Upsource测试
 * 修改空指针的问题。
 * 改个问题，假装有个BUG.
 * 假如在提交时没有选择Review ID
 *
 * @author wuzguo at 2017/6/27 15:07
 */

@Controller
@RequestMapping(value = "/echart",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class EchartController {

    // 日志
    private static final Logger LOGGER = LoggerFactory.getLogger(EchartController.class);

    @Resource
    private IUserStatService userStatService;

    /**
     * 用户注册数据
     *
     * @param request
     * @param response
     * @return {@link Result}
     */
    @RequestMapping(value = "/statRegistUser",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Result statRegistUser(final HttpServletRequest request, final HttpServletResponse response) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd");
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, -2);
        String indices = "logstash-" + dateFormat.format(calendar.getTime());

        Map<String, Map<String, Integer>> result = userStatService.registUser(indices);

        return new Result("成功", true, result);
    }


    /**
     * 用户地理位置监控
     *
     * @param request
     * @param response
     * @return {@link Result}
     */
    @RequestMapping(value = "/statInvestorsLocation",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Result statInvestorsLocation(final HttpServletRequest request, final HttpServletResponse response) {
        return new Result("成功", true, null);
    }
}


