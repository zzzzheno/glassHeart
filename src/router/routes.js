const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "Privacy", component: () => import("pages/PrivacyPage.vue") },
      {
        path: "ShoppingNotice",
        component: () => import("pages/ShoppingNotice.vue"),
      },
      {
        path: "ReturnNotice",
        component: () => import("pages/ReturnNotice.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
