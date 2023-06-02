import React from 'react';
import {MoneyType} from "./App";
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        props.money.banknotes ==="Dollars"
        ? 
        <BanknoteGreen>
            <Name>{props.money.banknotes}</Name>
            <Denomination>{props.money.value}</Denomination>
        </BanknoteGreen>
        :
        <BanknoteBlue>
            <Name>{props.money.banknotes}</Name>
            <Denomination>{props.money.value}</Denomination>

        </BanknoteBlue>
        //<div>
           // {props.money.banknotes}
       // </div>
    );
};

const BanknoteGreen=styled.div`
   background-color:palegreen;
   width:400px;
   height:200px;
   margin:10px;
`
const BanknoteBlue=styled.div`
   background-color:#5cb6ec;
   width:400px;
   height:200px;
   margin:10px;
`
const Name=styled.span`
  justify-content:center;
`
const Denomination=styled.span`
  justify-content:center;
  margin-top:30px;
  font-size:90px;
`
