// configs/helpers.js

export function hasRole(session, roleName) {
  if (!session || !Array.isArray(session.roles)) {
    return false;
  }

  return session.roles.some(role => 
    role?.name?.toLowerCase() === roleName?.toLowerCase()
  );
}

export function roleHasPermission(session, roleName, permissionName) {
  if (!session?.roles?.length || !roleName || !permissionName) {
    return false;
  }

  const normalizedRole = roleName.trim().toLowerCase();
  const normalizedPermission = permissionName.trim().toLowerCase();

  const role = session.roles.find(r =>
    r?.name?.trim().toLowerCase() === normalizedRole
  );

  if (!role?.permissions?.length) {
    return false;
  }

  return role.permissions.some(permission =>
    permission?.name?.trim().toLowerCase() === normalizedPermission
  );
}