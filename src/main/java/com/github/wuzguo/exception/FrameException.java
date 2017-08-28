package com.github.wuzguo.exception;


/**
 * 自定义异常类
 */
public class FrameException extends Throwable {

    private static final long serialVersionUID = 3720626957171754324L;

    private int errCode = -1; //错误码
    private String errMsg = ""; //错误信息

    /**
     * 缺省构造函数
     */
    public FrameException() {
        super();
    }


    /**
     * 缺省构造函数
     */
    public FrameException(Throwable e) {
        super(e);
    }

    /**
     * 用户自定义构造函数
     *
     * @param errCode String 错误码
     * @param errMsg  String 错误信息
     */
    public FrameException(String errMsg) {
        this.errMsg = errMsg;
    }

    /**
     * 用户自定义构造函数
     *
     * @param errCode String 错误码
     * @param errMsg  String 错误信息
     */
    public FrameException(int errCode, String errMsg) {
        this.errCode = errCode;
        this.errMsg = errMsg;
    }

    /**
     * 用户自定义构造函数
     *
     * @param errCode String 错误码
     * @param e       Exception 错误
     */
    public FrameException(int errCode, Throwable e) {
        this.errCode = errCode;
        if (e instanceof FrameException) {
            this.errMsg = ((FrameException) e).getErrMsg();
        } else {
            StackTraceElement[] elements = e.getStackTrace();
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < elements.length; i++) {
                sb.append(((StackTraceElement) elements[i]).toString());
                sb.append("\n");
            }
            sb.append(e.toString());
            this.errMsg = sb.toString();
        }
    }

    /**
     * 用户自定义构造函数
     *
     * @param errCode String 错误码
     * @param e       Exception 错误
     * @param eClass  Class
     */
    public FrameException(int errCode, Throwable e, Class<?> eClass) {
        this.errCode = errCode;
        if (e instanceof FrameException) {
            this.errMsg = ((FrameException) e).getErrMsg();
        } else {
            StackTraceElement[] elements = e.getStackTrace();
            int i = 0;
            String sClass = eClass.getName();
            for (i = 0; i < elements.length; i++) {
                String s = elements[0].getClassName();
                if (s.indexOf(sClass) > 0) {
                    break;
                }
            }
            if (i == elements.length - 1) {
                i = 0;
            }
            StringBuffer sb = new StringBuffer();
            sb.append("\n类名---方法名：");
            sb.append(elements[i].getClassName());
            sb.append("---");
            sb.append(elements[i].getMethodName());
            sb.append("\n错误行:");
            sb.append(elements[i].getLineNumber());
            sb.append("\n错误信息");
            sb.append(e.toString());
            this.errMsg = sb.toString();
        }
    }

    /**
     * 用户自定义构造函数
     *
     * @param errCode String 错误码
     * @param errStr  String用户对错误的解释
     * @param e       Exception 错误
     */
    public FrameException(int errCode, String errStr, Throwable e) {
        this.errCode = errCode;
        StringBuffer sb = new StringBuffer();
        sb.append(errStr);
        sb.append("\n");
        if (e instanceof FrameException) {
            sb.append(((FrameException) e).getErrMsg());
            this.errMsg = sb.toString();
        } else {
            StackTraceElement[] elements = e.getStackTrace();
            for (int i = 0; i < elements.length; i++) {
                sb.append(((StackTraceElement) elements[i]).toString());
                sb.append("\n");
            }
            sb.append(e.toString());
            this.errMsg = sb.toString();
        }
    }

    /**
     * 用户自定义构造函数
     *
     * @param errCode String 错误码
     * @param errStr  String用户对错误的解释
     * @param e       Exception 错误
     * @param eClass  Class
     */
    public FrameException(int errCode, String errStr, Throwable e, Class<?> eClass) {
        this.errCode = errCode;
        StringBuffer sb = new StringBuffer();
        sb.append(errStr);
        sb.append("\n");
        if (e instanceof FrameException) {
            sb.append(((FrameException) e).getErrMsg());
            this.errMsg = sb.toString();
        } else {
            StackTraceElement[] elements = e.getStackTrace();
            int i = 0;
            String s = "";
            if (eClass == null) {
                i = 0;
            } else {
                s = eClass.getName();
            }
            for (i = 0; i < elements.length; i++) {
                String str = elements[0].getClassName();
                if (str.indexOf(s) > 0) {
                    break;
                }
            }
            if (i == elements.length - 1) {
                i = 0;
            }
            sb.append("\n类名---方法名：");
            sb.append(elements[i].getClassName());
            sb.append("---");
            sb.append(elements[i].getMethodName());
            sb.append("\n错误行:");
            sb.append(elements[i].getLineNumber());
            sb.append("\n错误信息");
            sb.append(e.toString());
            this.errMsg = sb.toString();
        }
    }

    /**
     * 重载toString方法
     *
     * @return String 转换为显示字符串
     */
    public String toString() {
        return String.valueOf(errCode) + " " + errMsg;
    }

    /**
     * 获取错误码
     *
     * @return String
     */
    public int getErrCode() {
        return this.errCode;
    }

    /**
     * 获取错误信息
     *
     * @return String
     */
    public String getErrMsg() {
        return this.errMsg;
    }
}
