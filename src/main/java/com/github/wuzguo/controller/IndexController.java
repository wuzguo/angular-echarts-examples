
package com.github.wuzguo.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * TODO 首页相关的控制方法
 *
 * @author wuzguo at 2017/6/26 11:17
 */
@Controller
@RequestMapping(value = "/",
        produces = MediaType.TEXT_HTML_VALUE)
public class IndexController {

    /**
     * Index model and view.
     *
     * @param request  the request
     * @param response the response
     * @return the model and view
     */
    @RequestMapping(
            value = {"/index", "/"},
            method = RequestMethod.GET)
    public ModelAndView index(final HttpServletRequest request, final HttpServletResponse response) {
        String viewName = "index";
        ModelAndView view = new ModelAndView(viewName);
        return view;
    }
}
