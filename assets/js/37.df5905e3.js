(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{210:function(t,a,_){"use strict";_.r(a);var s=_(0),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"运维部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运维部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 运维部署")]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("项目打包")]),t._v(" "),_("ul",[_("li",[t._v("spring-boot-plus项目使用maven assembly插件进行打包")]),t._v(" "),_("li",[t._v("根据不同环境进行打包部署")]),t._v(" "),_("li",[t._v("包含启动、重启命令，配置文件提取到外部config目录")])])]),t._v(" "),_("h2",{attrs:{id:"线上部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线上部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 线上部署")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("指定打包环境")]),t._v(" "),_("li",[_("code",[t._v("local")]),t._v(":本地，"),_("code",[t._v("dev")]),t._v(":开发环境，"),_("code",[t._v("test")]),t._v(":测试环境，"),_("code",[t._v("uat")]),t._v(":用户验收测试，"),_("code",[t._v("prod")]),t._v(":生产环境")])])]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("mvn clean package -Pprod\n")])])]),_("h3",{attrs:{id:"启动方式一：直接启动jar"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动方式一：直接启动jar","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动方式一：直接启动jar")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" java -jar target/spring-boot-plus.jar "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),_("h3",{attrs:{id:"启动方式二：使用启动命令和外部配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动方式二：使用启动命令和外部配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动方式二：使用启动命令和外部配置 "),_("Badge",{attrs:{text:"推荐",type:"tip"}})],1),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" target\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf spring-boot-plus-server-assembly.tar.gz\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" spring-boot-plus-server\n")])])]),_("ul",[_("li",[t._v("打包后的项目目录结构")])]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("└── spring-boot-plus-server\n    ├── LICENSE\n    ├── bin\n    │   ├── restart.sh\n    │   ├── shutdown.sh\n    │   ├── startup.bat\n    │   └── startup.sh\n    ├── config\n    │   ├── application-prod.yml\n    │   ├── application.yml\n    │   ├── banner.txt\n    │   ├── logback.xml\n    │   └── mime-type.properties\n    ├── lib\n    │   └── spring-boot-plus.jar\n    └── logs\n        ├── back\n        │   └── spring-boot-plus-back.log\n        ├── spring-boot-plus-startup.log\n        └── spring-boot-plus.log\n")])])]),_("h3",{attrs:{id:"设置线上数据库、redis等敏感信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设置线上数据库、redis等敏感信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置线上数据库、Redis等敏感信息")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" config/application-prod.yml\n")])])]),_("h3",{attrs:{id:"启动服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动服务")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" bin/startup.sh\n")])])]),_("h3",{attrs:{id:"启动日志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动日志")]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("[root@springbootplus spring-boot-plus-1.2.0.RELEASE-prod]# sh spring-boot-plus/bin/startup.sh \n================================================ 2019-09-09 00:19:02 ================================================\napplication name: spring-boot-plus\napplication jar name: spring-boot-plus.jar\napplication bin path: /root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus/bin\napplication root path: /root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus\napplication log path: /root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus/logs/spring-boot-plus.log\napplication JAVA_OPT : -server -Xms1g -Xmx1g -Xmn512m -XX:MetaspaceSize=64m -XX:MaxMetaspaceSize=256m -XX:-OmitStackTraceInFastThrow\napplication background startup command: nohup java -server -Xms1g -Xmx1g -Xmn512m -XX:MetaspaceSize=64m -XX:MaxMetaspaceSize=256m -XX:-OmitStackTraceInFastThrow -jar /root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus/lib/spring-boot-plus.jar --spring.config.location=/root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus/config/ > /root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus/logs/spring-boot-plus.log 2>&1 &\napplication pid: 25435\n\n\n                 _                    _                 _                _\n                (_)                  | |               | |              | |\n  ___ _ __  _ __ _ _ __   __ _ ______| |__   ___   ___ | |_ ______ _ __ | |_   _ ___\n / __| '_ \\| '__| | '_ \\ / _` |______| '_ \\ / _ \\ / _ \\| __|______| '_ \\| | | | / __|\n \\__ \\ |_) | |  | | | | | (_| |      | |_) | (_) | (_) | |_       | |_) | | |_| \\__ \\\n |___/ .__/|_|  |_|_| |_|\\__, |      |_.__/ \\___/ \\___/ \\__|      | .__/|_|\\__,_|___/\n     | |                  __/ |                                   | |\n     |_|                 |___/                                    |_|\n\n      :: Spring Boot ::             (v2.1.8.RELEASE)\n      :: Spring Boot Plus ::        (v1.2.3.RELEASE)\n      :: spring-boot-plus ::        https://springboot.plus\n\n\n2019-09-09 00:19:09.600  INFO 25435 --- [           main] i.g.s.SpringBootPlusApplication          : Starting SpringBootPlusApplication on izm5e9gwtfsmjdxcsrpxbgz with PID 25435 (/root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus/lib/spring-boot-plus.jar started by root in /root/spring-boot-plus/target/spring-boot-plus-1.2.0.RELEASE-prod/spring-boot-plus)\n2019-09-09 00:19:09.962  INFO 25435 --- [           main] i.g.s.SpringBootPlusApplication          : The following profiles are active: prod\n")])])]),_("ul",[_("li",[t._v("application name: 应用程序名称")]),t._v(" "),_("li",[t._v("application jar name: 应用jar包名称")]),t._v(" "),_("li",[t._v("application bin path: 项目bin命令路径")]),t._v(" "),_("li",[t._v("application root path: 项目根路径")]),t._v(" "),_("li",[t._v("application log path: 项目运行日志路径")]),t._v(" "),_("li",[t._v("application JAVA_OPT : JAVA OPT参数设置")]),t._v(" "),_("li",[t._v("application background startup command: 执行命令后，实际的启动命令")]),t._v(" "),_("li",[t._v("application pid: 进程ID")]),t._v(" "),_("li",[t._v("The following profiles are active: prod："),_("code",[t._v("prod")]),t._v("当前项目运行的环境")])]),t._v(" "),_("h3",{attrs:{id:"启动成功"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动成功","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动成功")]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("2019-09-09 00:29:05.730  INFO 26795 --- [           main] i.g.s.SpringBootPlusApplication          : Started SpringBootPlusApplication in 10.746 seconds (JVM running for 11.28)\n2019-09-09 00:29:05.758  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : projectFinalName : spring-boot-plus\n2019-09-09 00:29:05.759  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : projectVersion : 1.2.0.RELEASE\n2019-09-09 00:29:05.759  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : profileActive : prod\n2019-09-09 00:29:05.759  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : contextPath : /\n2019-09-09 00:29:05.759  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : port : 8888\n2019-09-09 00:29:05.789  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : home:http://172.31.105.37:8888/\n2019-09-09 00:29:05.789  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : docs:http://172.31.105.37:8888/docs\n2019-09-09 00:29:05.789  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : spring-boot-plus project start success...........\n2019-09-09 00:29:05.795  INFO 26795 --- [           main] i.g.s.util.PrintApplicationInfo          : \n ____    __                    __        ____                                                   \n/\\  _`\\ /\\ \\__                /\\ \\__    /\\  _`\\                                                 \n\\ \\,\\L\\_\\ \\ ,_\\    __     _ __\\ \\ ,_\\   \\ \\,\\L\\_\\  __  __    ___    ___     __    ____    ____  \n \\/_\\__ \\\\ \\ \\/  /'__`\\  /\\`'__\\ \\ \\/    \\/_\\__ \\ /\\ \\/\\ \\  /'___\\ /'___\\ /'__`\\ /',__\\  /',__\\ \n   /\\ \\L\\ \\ \\ \\_/\\ \\L\\.\\_\\ \\ \\/ \\ \\ \\_     /\\ \\L\\ \\ \\ \\_\\ \\/\\ \\__//\\ \\__//\\  __//\\__, `\\/\\__, `\\\n   \\ `\\____\\ \\__\\ \\__/.\\_\\\\ \\_\\  \\ \\__\\    \\ `\\____\\ \\____/\\ \\____\\ \\____\\ \\____\\/\\____/\\/\\____/\n    \\/_____/\\/__/\\/__/\\/_/ \\/_/   \\/__/     \\/_____/\\/___/  \\/____/\\/____/\\/____/\\/___/  \\/___/ \n                                                                                                \n                                                                                                \n2019-09-09 00:29:05.909  INFO 26795 --- [nio-8888-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2019-09-09 00:29:05.909  INFO 26795 --- [nio-8888-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'\n2019-09-09 00:29:05.926  INFO 26795 --- [nio-8888-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 15 ms\n2019-09-09 00:29:06.317  INFO 26795 --- [gistrationTask1] d.c.b.a.c.r.ApplicationRegistrator       : Application registered itself as e211ba082db8\n2019-09-09 00:29:06.678  INFO 26795 --- [     parallel-2] io.lettuce.core.EpollProvider            : Starting with epoll library\n2019-09-09 00:29:06.681  INFO 26795 --- [     parallel-2] io.lettuce.core.KqueueProvider           : Starting without optional kqueue library\n")])])]),_("ul",[_("li",[t._v("projectFinalName：spring-boot-plus")]),t._v(" "),_("li",[t._v("projectVersion：项目发布版本")]),t._v(" "),_("li",[t._v("profileActive：项目使用的环境")]),t._v(" "),_("li",[t._v("contextPath：项目访问路径")]),t._v(" "),_("li",[t._v("port：项目端口号")]),t._v(" "),_("li",[t._v("home：项目主页 Spring Boot Admin监控页面")]),t._v(" "),_("li",[t._v("docs：Swagger接口页面")])]),t._v(" "),_("div",{staticClass:"danger custom-block"},[_("ul",[_("li",[t._v("!! 注意，这里的路径是内网地址，如果部署到服务器，请使用公网IP访问!!")])])]),t._v(" "),_("h3",{attrs:{id:"项目启动成功"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目启动成功","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目启动成功")]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("blockquote",[_("p",[t._v("spring-boot-plus project start success...........")])]),t._v(" "),_("ul",[_("li",[t._v("访问IP地址即可")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);