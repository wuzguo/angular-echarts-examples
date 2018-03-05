###注意事项
0. 本项目的基础框架基于大漠穷秋开源的angularJs项目中修改而来，地址：[http://git.oschina.net/mumu-osc/NiceFish-Admin-ng1](http://git.oschina.net/mumu-osc/NiceFish-Admin-ng1)，  主要演示angularJs和Echarts的集成使用。
1. 工程依赖的JDK版本为 `1.8` 。
2. monitor模块是一个基于`Spring Boot`项目，直接运行 `Application.java` 便可启动工程，监听端口号可以在 `application.properties` 中修改。
```properties
#web服务配置
server.port=9400
# session timeout in seconds
server.session-timeout=0
# bind to a specific NIC
server.address=localhost
```

3. UI使用的框架主要有`angularJS 1.x` 、`Bootstrap 3.3.X` 、`echarts 3.5.x` 等。

4. **如果在启动项目时发现服务监听的端口不是在配置文件`application.properties` 中配置的端口，需要找到`angular-echarts-examples.iml` 文件增加如下配置：**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <module org.jetbrains.idea.maven.project.MavenProjectsManager.isMavenModule="true" type="JAVA_MODULE" version="4">
    <component name="FacetManager">
      <facet type="Spring" name="Spring">
        <configuration/>
      </facet>
    </component>
    <component name="NewModuleRootManager" LANGUAGE_LEVEL="JDK_1_8">
      <output url="file://$MODULE_DIR$/target/classes" />
      <output-test url="file://$MODULE_DIR$/target/test-classes" />
      <content url="file://$MODULE_DIR$">
        <sourceFolder url="file://$MODULE_DIR$/conf/dev" type="java-resource" />
        <sourceFolder url="file://$MODULE_DIR$/src/main/java" isTestSource="false" />
        <sourceFolder url="file://$MODULE_DIR$/src/main/resources" type="java-resource" />   // ##就是这条##
        <sourceFolder url="file://$MODULE_DIR$/src/test/java" isTestSource="true" />
        <excludeFolder url="file://$MODULE_DIR$/target" />
      </content>
   ......
```
5效果图：

<img src="./0.png"/>

<img src="./1.png"/>