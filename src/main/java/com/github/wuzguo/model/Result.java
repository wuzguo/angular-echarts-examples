
package com.github.wuzguo.model;

/**
 * TODO 返回结果对象
 *
 * @author wuzguo at 2017/8/28 9:49
 */
public class Result {

    // 结果编码
    private Integer code;

    // 结果信息
    private String message;

    // 成功标志
    private Boolean success;

    // 结果数据
    private Object data;


    public Result(String message, Boolean success) {
        this.message = message;
        this.success = success;
    }

    public Result(Integer code, String message, Boolean success) {
        this.code = code;
        this.message = message;
        this.success = success;
    }

    public Result(String message, Boolean success, Object data) {
        this.message = message;
        this.success = success;
        this.data = data;
    }

    public Result(Integer code, String message, Boolean success, Object data) {
        this.code = code;
        this.message = message;
        this.success = success;
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Result{" +
                "code=" + code +
                ", message='" + message + '\'' +
                ", success=" + success +
                ", data=" + data +
                '}';
    }
}
