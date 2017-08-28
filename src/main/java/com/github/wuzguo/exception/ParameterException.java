
package com.github.wuzguo.exception;

/**
 * 参数格式或者值有误时候抛出的例外。
 *
 * @author Yelin.G at 2015/11/15 6:38
 */
public class ParameterException extends RuntimeException {

    /**
     * {@link RuntimeException()}。
     */
    public ParameterException() {
        super();
    }

    /**
     * {@link RuntimeException(String)}。
     */
    public ParameterException(String message) {
        super(message);
    }

    /**
     * {@link RuntimeException(Throwable)}。
     */
    public ParameterException(Throwable throwable) {
        super(throwable);
    }
}
