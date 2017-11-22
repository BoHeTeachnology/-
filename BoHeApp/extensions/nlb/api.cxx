#include "./include/nlb/nlbapi.h"
#include <stdio.h>

extern "C"  int32_t getroutebyname_wrapper(const char *name, struct routeid *route){

   return getroutebyname(name,route);
}

extern "C" int32_t updateroute_wrapper(const char *name, uint32_t ip, int32_t failed, int32_t cost){

   return  updateroute(name, ip, failed, cost);

}

extern "C"  const char * getroutebyname_test(const char *name, struct routeid *route){
     route->ip = 10;
     printf("FFFFFFF!!!!!!");
     return name;
}
