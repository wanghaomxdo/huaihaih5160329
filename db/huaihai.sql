 /*========================================================= huaihaih5160321数据库*/

/*================================= 建立表空间及对应dba*/
 -- create user
 GRANT USAGE ON *.* TO 'huaihaih5160321'@'localhost' IDENTIFIED BY 'huaihaih5160321' WITH GRANT OPTION;
 -- create database
 CREATE DATABASE huaihaih5160321 CHARACTER SET  utf8  COLLATE utf8_general_ci;
 -- grant user 权限1,权限2,select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限
 GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,LOCK TABLES ON huaihaih5160321.*  TO 'huaihaih5160321'@'localhost' IDENTIFIED BY 'huaihaih5160321';

 /*================================= 建立表、表主外键、多表关联等T-SQL*/
 -- 改变当前数据库
 USE huaihaih5160321;

/*
用户表
*/
create table user (
id INT NOT NULL auto_increment COMMENT 'ID标识',
trade VARCHAR(128) NOT NULL COMMENT '行业',
brand VARCHAR(128) NOT NULL COMMENT '品牌',
name VARCHAR(128) NOT NULL COMMENT '姓名',
phone CHAR(11) NOT NULL COMMENT '电话号码',
email VARCHAR(128) NOT NULL COMMENT '邮件',
adate VARCHAR(19) NOT NULL COMMENT '提交信息时间',
openid VARCHAR(50)  NULL DEFAULT '' COMMENT 'openID',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
