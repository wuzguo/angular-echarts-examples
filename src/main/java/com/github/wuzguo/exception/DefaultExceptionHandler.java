
package com.github.wuzguo.exception;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;


/**
 * 例外处理。
 *
 * @author wuzguo at 2017/06/28
 */
@ControllerAdvice
public class DefaultExceptionHandler {
    /**
     * 日志
     */
    protected static final Logger LOGGER = LoggerFactory.getLogger(DefaultExceptionHandler.class);


    @ExceptionHandler(RuntimeException.class)
    public ModelAndView onRuntimeExceptionOccuring(final RuntimeException e) {
        LOGGER.error("onRuntimeExceptionOccuring: " + e.getMessage());
        String viewName = "/error/500";
        ModelAndView modelAndView = new ModelAndView(viewName);
        return modelAndView;
    }


    @ExceptionHandler(FrameException.class)
    public ModelAndView onFrameExceptionOccuring(final FrameException e) {
        LOGGER.error("onFrameExceptionOccuring: " + e.getMessage());
        String viewName = "/error/500";
        ModelAndView modelAndView = new ModelAndView(viewName);
        return modelAndView;
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView onExceptionOccuring(final Exception e) {
        LOGGER.error("onExceptionOccuring: " + e.getMessage());
        e.printStackTrace();
        String viewName = "/error/500";
        ModelAndView modelAndView = new ModelAndView(viewName);
        return modelAndView;
    }
}
