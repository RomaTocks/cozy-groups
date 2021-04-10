module.exports = {
    error: {
        emptyGroupName: 'Введите название группы',
        findGroupByInviteCode: 'Группа с таким кодом приглашения не найдена',
        findGroupById: 'Группа c таким id не найдена',
        alreadyGroupMember: 'Вы уже состоите в этой группе',
        notGroupMember: 'Вы не состоите в этой группе',
        
        wrongRole: 'Неверная роль. Доступные роли: member, editor, admin, owner',
        changeSelfRole: 'Нельзя изменить роль самому себе',
        requestedUserAlreadyHaveRole: 'Пользователь уже имеет такие права',

        ownerTryingToLeave: 'Нельзя выйти из группы являясь ее владельцем. Сперва передайте свои права другому участнику',

        requestedUserNotGroupMember: 'Запрашиваемый пользователь не состоит в группе',
        permissionDenied: 'У вас недостаточно прав для данного действия',

        validation: {
            login: 'Неверный логин',
            password: 'Неверный пароль',
            firstName: 'Неверное имя',
            lastName: 'Неверная фамилия',
            groupName: 'Неверное название группы'
        },
        loginAlreadyTaken: 'Данный логин уже занят',
        emptyLogin: 'Введите логин',
        emptyPassword: 'Введите пароль',

        findUserByLogin: 'Пользователь с данным логином не найден',
        wrondPassword: 'Неверный пароль'
    },
    success: {
        groupCreated: 'Группа успешно создана',
        userJoinedGroup: 'Вы успешно присоединились к группе',
        userLeavedGroup: 'Вы успешно вышли из группы',
        userRoleChanged: 'Права пользователя успешно изменены',
        ownerRoleTransfered: 'Права владельца успешно переданы',
        userDeleted: 'Пользователь успешно удален',
        groupNameUpdated: 'Название группы успешно изменено',
        groupDeleted: 'Группа успешно удалена',

        userCreated: 'Пользователь успешно зарегистрирован',
        userAuthorized: 'Успешно авторизован',
        
        tokenDeleted: 'Токен успешно удален'
    }
}