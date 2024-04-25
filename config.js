module.exports = {
  app: {
    url: "http://localhost:5173",
    name: "Project1",
  },
  smtp: {
    host: "smtp.mailtrap.io",
    port: "587",
    user: "",
    password: "",
  },
  mail: {
    sender: "admin@example.com",
    welcome:
      "Welcome to {app_name},\n\nYour user has been created. The login information:\nLogin URL: {app_url}/#/login\nUser Name: {user}\n\nPlease click the link below to set your password.\n{app_url}/#/changePassword/{token}\n\nBest Regards,\nAdministrator",
    reset:
      "Dear User,\n\nYou recently requested to reset the password for your {app_name} account. Please click the link below to proceed.\n{app_url}/#/changePassword/{token}\n\nBest Regards,\nAdministrator",
  },

  // // psql postgres://[user]:[password]@[neon_hostname][:port]/[dbname]
  // postgresql://neonv1_owner:xutHLJKYf29b@ep-frosty-flower-a1jhcer4-pooler.ap-southeast-1.aws.neon.tech/newDB?sslmode=require
  db: {
    host: "ep-frosty-flower-a1jhcer4-pooler.ap-southeast-1.aws.neon.tech",
    port: 5432,
    user: "neonv1_owner",
    password: "xutHLJKYf29b",
    database: "newDB",
    dialect: "postgres",
  },
  // db: {
  //   host: "ep-frosty-flower-a1jhcer4-pooler.ap-southeast-1.aws.neon.tech",
  //   port: 5432,
  //   user: "neonv1_owner",
  //   password: "xutHLJKYf29b",
  //   database: "newDB",
  //   dialect: "postgres",
  // },
  menu: [
    { title: "Brand", path: "brand", roles: "ADMIN,USER", show: true },
    {
      title: "Order Detail",
      path: "orderDetail",
      roles: "ADMIN,USER",
      show: false,
    },
    { title: "Order", path: "orderHeader", roles: "ADMIN,USER", show: true },
    { title: "Product", path: "product", roles: "ADMIN,USER", show: true },
    { title: "User Account", path: "userAccount", roles: "ADMIN", show: true },
  ],
  jwtSecret: "b0WciedNJvFCqFRbB2A1QhZoCDnutAOen5g1FEDO0HsLTwGINp04GXh2OXVpTqQL",
};
