import React from 'react';
import styled from 'styled-components';

const ModalPadding = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #FFFFFF99;
    backdrop-filter: blur(5px);
    z-index: 3;
`;

const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF77;
    border: 1px solid #00000033;
    border-radius: 5px;
    box-sizing: border-box;
    width: 80%;
    height: 80%;
    margin: auto;
`;

const ModalHeader = styled.section`
    padding: 3px 10px;
    border-bottom: 1px solid #FFFFFF77;
`;

const H4 = styled.h4`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

const CloseBtn = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-5px, -5px)
               rotate(45deg);
    font-size: 24px;
    font-weight: bold;
    color: #00000099;
    background-color: transparent;
    border: none;
    width: 24px;
    height: 24px;
    padding: 0;
    box-sizing: border-box;
`;

const ModalBody = styled.section`
    padding: 10px;
`;

const UL = styled.ul`
    list-style-type: disc;
    list-style-position: inside;
`;

const Modal = props => {
    return (
        <ModalPadding id='modalPadding' onClick={e => {(e.target.id === 'modalPadding' || e.target.id === 'modalX') && props.handleClickOpenModal(e)}}>
            <ModalWindow>
                <ModalHeader>
                    <CloseBtn id='modalX' type='button'>+</CloseBtn>
                    <H4>Тестовое задание</H4>
                </ModalHeader>
                <ModalBody>
                        <p>Сделать страницу, на которой будет:</p>
                            <UL>
                                <li>поле для ввода;</li>
                                <li>checkbox;</li>
                                <li>две кнопки;</li>
                                <li>место для вывода данных.</li>
                            </UL>
                            <p>Одна кнопка - фильтр по длине слов, вторая кнопка - фильтр по подстроке. Checkbox отвечает за чувствительность регистра поиска.<br />
        При вводе в поле числа и клике по кнопке фильтра по длине слов в место для вывода данных выводятся строки с длиной строки больше введенного числа.<br />
        При вводе строки в поле и клике по кнопке фильтра по подстроке в место для вывода данных выводятся строки, которые содержат введенную подстроку.<br />
        Если checkbox чувствительности регистра проставлен, строки сравниваются с учетом регистра ('aAa' не равно 'aaa'). Если checkbox снят, строки сравниваются без учета регистра ('aAa' равно 'aaa').<br />
        Данные берутся HTTP запросом по адресу http://www.mrsoft.by/data.json, из поля data полученного объекта. Файл со временем не меняется.
                        </p>
                </ModalBody>
            </ModalWindow>
        </ModalPadding>
    )
};

export { Modal };