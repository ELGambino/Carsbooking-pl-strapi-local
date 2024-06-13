import React, { useEffect, useState } from "react";
import { Select, DatePicker, TimePicker } from 'antd';
import { gql, useQuery } from '@apollo/client';
import { useCookies } from "react-cookie";
import moment from 'moment';

const { Option } = Select;
const pickUpPoints = gql`
  query pickUpPoints {
    pickUpPoints {
      data {
        id
        attributes {
          City
          Address
          PostalCode
        }
      }
    }
  }
  `;

export const SelectPickUpPoints = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["pick-up"]);
    const { loading, error, data } = useQuery(pickUpPoints);
    if (loading) return 'Ładowanie...';
    if (error) return 'Błąd';
    const PickUp = cookies["pick-up"];
    function onChangePick(value) {
      setCookie("pick-up", (`${value}`));
    }
  
    return (
      <>
      <Select
      showSearch
      defaultValue={PickUp}
      onChange={onChangePick}
      style={{ width: '100%', height: '45px' }}
      placeholder="Wprowadź punkt odbioru..."
      optionFilterProp="children"
      filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      >
        {data.pickUpPoints.data.map(({ id, attributes }) => (
          <Option key={id} value={attributes.City}>{attributes.City}</Option>
        ))}
      </Select>
      </>
    )
}
  
export const SelectTurnPoint = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["turn-point"]);
    const { loading, error, data } = useQuery(pickUpPoints);
    if (loading) return 'Ładowanie...';
    if (error) return 'Błąd';
    const TurnPoint = cookies["turn-point"];
    function onChangeTurn(value) {
      setCookie("turn-point", (`${value}`));
    }
  
    return (
      <>
      <Select
      showSearch
      defaultValue={TurnPoint}
      onChange={onChangeTurn}
      style={{ width: '100%', height: '45px' }}
      placeholder="Wprowadź punkt zwrotu..."
      optionFilterProp="children"
      filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      >
        {data.pickUpPoints.data.map(({ id, attributes }) => (
          <Option key={id} value={attributes.City}>{attributes.City}</Option>
        ))}
      </Select>
      </>
    )
}

export const DataPickerPointUp = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["data-up-point"]);
    const DataUpPoint = cookies["data-up-point"];
    function DataPickerUp(value) {
      setCookie("data-up-point", (`${value}`));
    }
    
    return(
        <>
        <DatePicker
            defaultValue={moment('2024-01-01', 'YYYY-MM-DD')}
            format="YYYY-MM-DD"
            style={{ width: '100%', height: '45px' }}
            placeholder="Wybierz date odbioru..."
            onChange={DataPickerUp}
        />
        </>
    );
}

export const DataPickerTurnPoint = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["data-turn-point"]);
    const DataTurnPoint = cookies["data-turn-point"];
    function DataPickerTurn(value) {
      setCookie("data-turn-point", (`${value}`));
    }
  
    return(
        <>
        <DatePicker
            defaultValue={moment('2024-01-01', 'YYYY-MM-DD')}
            format="YYYY-MM-DD"
            style={{ width: '100%', height: '45px' }}
            placeholder="Wybierz date zwrotu..."
            onChange={DataPickerTurn} 
        />
        </>
    );
}