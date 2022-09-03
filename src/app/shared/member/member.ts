export interface Member {
    $id: number;
    photoURL: string;
    displayName: string;
    provider: string;
    $email: string;
    firstname: string;
    lastname: string;
    address: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zipcode: number;
    phonenumber: number;
    membership: string;
    initialpayment: number;
    fee: number;
    term: string;
    discount_code: string;
    joined: string;
    expires: string;
    billingFirstname: string;
    billingLastname: string;
    membershipstatus: string;
    usertype: string;
}
