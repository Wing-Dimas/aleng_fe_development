export function unauthPage(token, status, router) {
  if (status == "unauthenticated") {
    if (token == undefined) {
      router.push("/");
    }
  }
}

export function authPage(token, status, router) {
  if (status == "authenticated") {
    router.push("/");
  }
  if (token) {
    router.push("/");
  }
}
