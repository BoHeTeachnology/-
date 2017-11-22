
#ifndef __SRPC_CINTF_H__
#define __SRPC_CINTF_H__

#if defined(__cplusplus) || defined(c_plusplus)
extern "C" {
#endif

void set_log_option_str(const char *key, const char *val);
void set_log_option_long(const char *key, int64_t val);
void reset_log_option(void);
void msec_log_error(const char *str);
void msec_log_info(const char *str);
void msec_log_debug(const char *str);
void msec_log_fatal(const char *str);

int get_config(const char *session, const char *key, char *val, int vlen);

#if defined(__cplusplus) || defined(c_plusplus)
}
#endif

#endif

