#ifndef __MT_CAPI_H__
#define __MT_CAPI_H__

#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

#ifdef __cplusplus
extern "C" {
#endif

/******************************************************************************/
/*  微线程用户接口定义: 微线程封装系统接口 C                                  */
/******************************************************************************/

/**
 * @brief 微线程主动sleep接口, 单位ms
 * @info  业务需要主动让出CPU时使用
 */
void mtc_sleep(int ms);

/**
 * @brief 微线程获取系统时间，单位ms
 */
unsigned long long mtc_time_ms(void);

/******************************************************************************/
/*  微线程用户接口定义: 微线程用户私有数据接口                                */
/******************************************************************************/

/**
 * @brief 设置当前微线程的私有变量
 * @info  只保存指针，内存需要业务分配
 */
void mtc_set_private(void *data);

/**
 * @brief  获取当前微线程的私有变量
 * @return 私有变量指针
 */
void* mtc_get_private(void);


/******************************************************************************/
/*  微线程用户接口定义: 微线程封装系统接口(不推荐使用)                        */
/******************************************************************************/

/**
 * @brief  微线程框架初始化
 * @info   业务不使用spp，裸用微线程，需要调用该函数初始化框架；
 *         使用spp，直接调用SyncFrame的框架初始化函数即可
 * @return <0 初始化失败  0 初始化成功
 */
int mtc_init_frame(void);

/**
 * @brief 设置微线程独立栈空间大小
 * @info  非必须设置，默认大小为128K
 */
void mtc_set_stack_size(unsigned int bytes);

/**
 * @brief 微线程包裹的系统IO函数 recvfrom
 * @param fd 系统socket信息
 * @param buf 接收消息缓冲区指针
 * @param len 接收消息缓冲区长度
 * @param from 来源地址的指针
 * @param fromlen 来源地址的结构长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功接收长度, <0 失败
 */
int mtc_recvfrom(int fd, void *buf, int len, int flags, struct sockaddr *from, socklen_t *fromlen, int timeout);

/**
 * @brief 微线程包裹的系统IO函数 sendto
 * @param fd 系统socket信息
 * @param msg 待发送的消息指针
 * @param len 待发送的消息长度
 * @param to 目的地址的指针
 * @param tolen 目的地址的结构长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功发送长度, <0 失败
 */
int mtc_sendto(int fd, const void *msg, int len, int flags, const struct sockaddr *to, int tolen, int timeout);


/**
 * @brief 微线程包裹的系统IO函数 connect
 * @param fd 系统socket信息
 * @param addr 指定server的目的地址
 * @param addrlen 地址的长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功发送长度, <0 失败
 */
int mtc_connect(int fd, const struct sockaddr *addr, int addrlen, int timeout);

/**
 * @brief 微线程包裹的系统IO函数 accept
 * @param fd 监听套接字
 * @param addr 客户端地址
 * @param addrlen 地址的长度
 * @param timeout 最长等待时间, 毫秒
 * @return >=0 accept的socket描述符, <0 失败
 */
int mtc_accept(int fd, struct sockaddr *addr, socklen_t *addrlen, int timeout);

/**
 * @brief 微线程包裹的系统IO函数 read
 * @param fd 系统socket信息
 * @param buf 接收消息缓冲区指针
 * @param nbyte 接收消息缓冲区长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功接收长度, <0 失败
 */
ssize_t mtc_read(int fd, void *buf, size_t nbyte, int timeout);

/**
 * @brief 微线程包裹的系统IO函数 write
 * @param fd 系统socket信息
 * @param buf 待发送的消息指针
 * @param nbyte 待发送的消息长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功发送长度, <0 失败
 */
ssize_t mtc_write(int fd, const void *buf, size_t nbyte, int timeout);

/**
 * @brief 微线程包裹的系统IO函数 recv
 * @param fd 系统socket信息
 * @param buf 接收消息缓冲区指针
 * @param len 接收消息缓冲区长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功接收长度, <0 失败
 */
ssize_t mtc_recv(int fd, void *buf, int len, int flags, int timeout);

/**
 * @brief 微线程包裹的系统IO函数 send
 * @param fd 系统socket信息
 * @param buf 待发送的消息指针
 * @param nbyte 待发送的消息长度
 * @param timeout 最长等待时间, 毫秒
 * @return >0 成功发送长度, <0 失败
 */
ssize_t mtc_send(int fd, const void *buf, size_t nbyte, int flags, int timeout);


/**
 * @brief 微线程等待epoll事件的包裹函数
 * @param fd 系统socket信息
 * @param events 等待的事件 IN/OUT
 * @param timeout 最长等待时间, 毫秒
 * @return >0 到达的事件, <0 失败
 */
int mtc_wait_events(int fd, int events, int timeout);


/**
 * @brief 创建微线程
 * @param entry   入口函数指针，类型见ThreadStart
 * @param args    入口函数参数
 * @return   0 创建成功  <0 创建失败
 */
int mtc_start_thread(void* entry, void* args);

/**
 * @brief 从TCP连接池中获取连接，如果没有，则新创建
 * @param dst  目的地址
 * @param sock socket文件描述符
 * @return 返回微线程TCP连接对象
 */
void *mtc_get_keep_conn(struct sockaddr_in* dst, int *sock);

/**
 * @brief  释放TCP连接到连接池
 * @param  conn   mt_get_keep_conn返回的连接对象指针
 * @param  force  1  -> 强制释放连接，不会放入连接池
 * @param         0  -> 释放到连接池，连接池满了，关闭连接
 */
void mtc_free_keep_conn(void *conn, int force);



#ifdef __cplusplus
}
#endif


#endif

