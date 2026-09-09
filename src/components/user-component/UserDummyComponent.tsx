import {FC} from 'react';
import {IUsersDummy} from "../../models/user-models/IUsersDummy.tsx";

type UserTypeProp = {
    item:IUsersDummy;
};
const UserDummyComponent:FC<UserTypeProp> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.maidenName}</p>
            <p>{item.age}</p>
            <p>{item.gender}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.username}</p>
            <p>{item.password}</p>
            <p>{item.birthDate}</p>
            <img src={item.image} alt=""/>
            <p>{item.bloodGroup}</p>
            <p>{item.height}</p>
            <p>{item.weight}</p>
            <p>{item.eyeColor}</p>
            <p>{item.hair.color}</p>
            <p>{item.hair.type}</p>
            <p>{item.ip}</p>
            <p>{item.address.address}</p>
            <p>{item.address.city}</p>
            <p>{item.address.state}</p>
            <p>{item.address.stateCode}</p>
            <p>{item.address.postalCode}</p>
            <p>{item.address.coordinates.lat}</p>
            <p>{item.address.coordinates.lng}</p>
            <p>{item.address.country}</p>
            <p>{item.macAddress}</p>
            <p>{item.university}</p>
            <p>{item.bank.cardExpire}</p>
            <p>{item.bank.cardNumber}</p>
            <p>{item.bank.cardType}</p>
            <p>{item.bank.currency}</p>
            <p>{item.bank.iban}</p>
            <p>{item.company.department}</p>
            <p>{item.company.name}</p>
            <p>{item.company.title}</p>
            <p>{item.company.address.address}</p>
            <p>{item.company.address.city}</p>
            <p>{item.company.address.state}</p>
            <p>{item.company.address.stateCode}</p>
            <p>{item.company.address.postalCode}</p>
            <p>{item.company.address.coordinates.lat}</p>
            <p>{item.company.address.coordinates.lng}</p>
            <p>{item.company.address.country}</p>
            <p>{item.ein}</p>
            <p>{item.ssn}</p>
            <p>{item.userAgent}</p>
            <p>{item.crypto.coin}</p>
            <p>{item.crypto.wallet}</p>
            <p>{item.crypto.network}</p>
            <p>{item.role}</p>
        </div>
    );
};

export default UserDummyComponent;
