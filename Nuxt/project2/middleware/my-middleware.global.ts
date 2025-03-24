export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/productos")) {
    return navigateTo("/home");
  }
});
