export default function() {
  return [
    {
      title: "Home",
      to: "/home",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Perfil",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/perfil",
    },
    {
      title: "Publicaciones",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/publicaciones",
    },
    {
      title: "Solicitudes",
      htmlBefore: '<i class="material-icons">note</i>',
      to: "/requests",
    },
    /*{
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }*/
  ];
}
