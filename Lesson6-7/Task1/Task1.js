"use strict";

let order = {
    name: 'Sofa',
    description: 'Piece of furniture',
    cost: 20000,
    currency: 'RUB',
    manufactures_firm: 'IKEA',
    dateOfManufacture: '19.12.2020',
};

let unfilledOrder = {
    name: 'Pillow',
    manufactures_firm: 'IKEA',
    dateOfManufacture: '19.12.2020',
};

let showOrderInformation = (info) => {
    let {name = 'default name', description = 'default description', cost = 'default cost', currency = 'default currency', manufactures_firm = 'default manufacture', date = 'default date'} = info;
    let validation = (info) => {
        if ((typeof(cost) == "number") && (cost > 0) && (name != "default name") && (description != "default description") && (currency != "default currency") && (manufactures_firm != "default manufacture") && (dateOfManufacture != "default date")) {
            console.warn('Object is valid');
        } else {
            console.warn('Object is not valid');
        }
    };
    console.warn(`name : ${name} \n description : ${description} \n cost : ${cost} \n currency : ${currency} \n manufacture : ${manufactures_firm} \n date : ${dateOfManufacture}`);
    validation(info);
};