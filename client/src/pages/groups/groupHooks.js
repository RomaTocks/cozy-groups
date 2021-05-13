import React, { useEffect, useState } from 'react';
import "./group.css"
import axios from "axios";

import SettingsDropdown from "../../components/settingDropdown/SettingDropdown";
import Loader from "../../components/loader/Loader";
import GroupsTabs from "../../components/groupsTabs/GroupsTabs";


function GroupHooks(props) {
    const [role, setRole] = useState("");
    const [token, setToken] = useState("");
    const [title, setTitle] = useState("");
    const [group, setGroup] = useState({});
    const [loading, setLoading] = useState(true);
    const [loaderText, setLoaderText] = useState("Загрузка группы...")

    useEffect(() => {
        setRole(role);
    }, [role]);

    useEffect(() => {
        setTitle(group.name);
        setGroup(group);
    }, [group]);

    useEffect(() => {
        if (title === undefined) {
            document.title = "Группа";
        }
        else {
            document.title = title;
        }
    });

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            props.updateMainModal("Ошибка", "Нет доступа к группе!", "error");
            props.deleteToken(null);
            props.history.push("/");
        }
        if (props.token !== null) {
            setLoading(true);
            setToken(props.token);
            axios.get('http://localhost:3080/groups/' + props.match.params.id, {
                headers: {
                    'Authorization': props.token
                }
            })
                .then(response => {
                    if (response.data.ok) {
                        let currentUser = response.data.group.users.find(user => user.id === props.user.id)
                        setGroup(response.data.group);
                        setLoading(false);
                        setRole(currentUser.role);
                    }
                })
                .catch(err => {
                    props.updateMainModal("Ошибка", err.response.data.message, "error")
                    props.history.push("/groups");
                });
        }
    }, [props.token, props.match.params.id]);

    const deleteGroup = () => {
        setLoading(true);
        setLoaderText("Удаление группы...");
        props.updateModal();
        axios.delete('http://localhost:3080/groups/' + props.match.params.id, {
            headers: {
                'Authorization': props.token
            }
        }).then(response => {
            if (response.data.ok) {
                setLoading(false);
                props.updateDeleteGroups(props.match.params.id);
                props.history.push("/");
            }
        })
            .catch((err) => {
                setLoading(false);
                if (err.response) {
                    props.updateMainModal("Ошибка", err.response.data.message, "error");
                }
                else {
                    props.updateMainModal("Ошибка", err.response.data.message, "error");
                    setTimeout(() => {
                        props.history.push("/");
                    }, 3000);
                }
            });
    };

    const leave = () => {
        setLoading(true);
        setLoaderText("Выход из группы...");
        props.updateModal();
        let data = { groupId: group.id };
        axios.post('http://localhost:3080/groups/leave', data, {
            headers: {
                'Authorization': props.token
            }
        })
            .then(response => {
                if (response.data.ok) {
                    props.updateMainModal('Уведомление', "Вы вышли из группы!", "notification")
                    props.updateDeleteGroups(props.match.params.id);
                    props.history.push("/");
                }
            })
            .catch((err) => {
                setLoading(false);
                if (err.response) {
                    props.updateMainModal("Ошибка", err.response.data.message, "error");
                }
                else {
                    setTimeout(() => {
                        props.history.push("/");
                        props.close();
                    }, 3000);
                }
            })
    };

    const transfer = (userId) => {
        setLoading(true);
        setLoaderText("Обновление владельца группы...");
        props.updateModal();
        let data = { groupId: group.id, userId: userId }
        axios.post('http://localhost:3080/groups/transfer-owner-rights', data, {
            headers: {
                'Authorization': props.token
            }
        })
            .then(response => {
                if (response.data.ok) {
                    let message = response.data.message;
                    axios.get('http://localhost:3080/groups/' + props.match.params.id, {
                        headers: {
                            'Authorization': props.token
                        }
                    })
                        .then(response => {
                            if (response.data.ok) {
                                setGroup(response.data.group);
                                setLoading(false);
                                props.updateMainModal('Уведомление', message, "notification");
                            }
                        });
                }
            })
            .catch((err) => {
                setLoading(false);
                if (err.response) {
                    props.updateMainModal("Ошибка", err.response.data.message, "error");
                }
                else {
                    setTimeout(() => {
                        props.history.push("/");
                        props.close();
                    }, 3000);
                }
            })
    }

    const change = (newName) => {
        setLoading(true);
        setLoaderText("Обновление названия группы...");
        props.updateModal();
        let data = { groupId: group.id, groupName: newName }
        axios.put('http://localhost:3080/groups/group-name', data, {
            headers: {
                'Authorization': props.token
            }
        })
            .then(response => {
                if (response.data.ok) {
                    setLoading(false);
                    setTitle(newName);
                    props.updateMainModal('Уведомление', response.data.message, "notification")
                    props.updateGroup(props.match.params.id, newName);
                }
            })
            .catch((err) => {
                setLoading(false);
                if (err.response) {
                    props.updateMainModal("Ошибка", err.response.data.message, "error");
                }
                else {
                    setTimeout(() => {
                        props.history.push("/");
                        props.close();
                    }, 3000);
                }
            })
    }

    const handleUserChange = (newUsers) => {
        let newGroup = group;
        newGroup.users = newUsers;
        setGroup(newGroup);
    }

    return (
        <div>
            <Loader loading={loading} text={loaderText} />
            <div className={loading ? 'hidden' : ''}>
                <div className="header">
                    <div className="buttons">
                        <SettingsDropdown
                            role={role}
                            transfer={() => props.updateModal(`Передача прав владельца группы "${group.name}"`, `Выберите из списка пользователя для передачи прав`, transfer, "users", group)}
                            change={() => props.updateModal(`Изменение названия группы`, `Введите новое название группы:`, change, "input")}
                            leave={() => props.updateModal(`Выход`, `Хотите выйти из группы "${group.name}"?`, leave, "action")}
                            delete={() => props.updateModal(`Удаление`, `Вы действительно хотите удалить группу "${group.name}"? Это безвозвратное действие!`, deleteGroup, "action")}
                        />
                    </div>
                    <div>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div>
                    <GroupsTabs role={role} token={props.token} group={group} changeUsers={handleUserChange} />
                </div>
            </div>
        </div>
    );
}

export default GroupHooks;