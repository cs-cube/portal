import { NavItem } from './side-menu-item/nav-item';

export const MENU: NavItem[] = [
    {
      displayName: 'Dashboard',
      route: '/dashboard',
      iconName: 'dashboard',
      permission: null,
      routerLinkOption: {}
    },
    {
      displayName: 'Students',
      iconName: 'contacts',
      route: '/students',
      permission: 'MANAGE_STUDENTS_VIEW_ANY'
    },
    {
      displayName: 'Programs',
      iconName: 'school',
      route: '/programs',
      permission: null
    },
    {
      displayName: 'Departments',
      iconName: 'business',
      route: '/departments',
      permission: null
    },
    {
      displayName: 'Colleges',
      iconName: 'business',
      route: '/colleges',
      permission: null
    },
    {
      displayName: 'Posting',
      iconName: 'developer_board',
      route: '/posts',
      permission: 'MANAGE_POSTS_VIEW_ANY'
    },
    {
      displayName: 'Events',
      iconName: 'event',
      route: '/events',
      permission: 'MANAGE_EVENTS_VIEW_ANY'
    },
    {
      displayName: 'Service Transactions',
      iconName: 'print',
      route: '/service-transactions',
      permission: 'MANAGE_SERVICE_TRANSACTIONS_VIEW_ANY'
    },
    {
      displayName: 'Administration',
      iconName: 'account_balance',
      permission: 'ADMIN',
      children: [
        {
          displayName: 'Users',
          route: '/users',
          iconName: 'group',
          permission: 'MANAGE_USERS_VIEW_ANY'
        },
        {
          displayName: 'Service Settings',
          route: '/settings/printing-service',
          iconName: 'insert_drive_file',
          permission: 'MANAGE_USERS_VIEW_ANY'
        },
      ]
    }
  ];