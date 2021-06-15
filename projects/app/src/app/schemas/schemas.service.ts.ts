import { Injectable } from '@angular/core';
import { PoSyncSchema } from '../../../../sync/src/lib/services/po-sync/interfaces/po-sync-schema.interface';

@Injectable({
  providedIn: 'root'
})
export class SchemasService {
  private readonly URL = "http://vmcrm66140.sp01.local:8282/rest/"//"http://localhost:8282/rest/" //Local
  // private readonly URL = "" //Mingle
  constructor() { }

  getSchemaNotifications(): PoSyncSchema {
    let notificationSchema: PoSyncSchema;
    notificationSchema = {
      getUrlApi: `${this.URL}api/tgv/notifications`,
      diffUrlApi: `${this.URL}api/tgv/notifications/diff`,
      deletedField: 'deleted',
      fields: [
        'id',
        'title',
        'description',
        'type',
        'user_id',
        'notification_status',
        'movimentation_status',
        'notification_date',
        'notification_hour'
      ],
      idField: 'id',
      name: 'Notification',
      pageSize: 500
    };
    return notificationSchema;
  }

  getSchemaPaymentConditions(): PoSyncSchema {
    let paymentConditionSchema: PoSyncSchema;
    paymentConditionSchema = {
      getUrlApi: `${this.URL}api/tgv/paymentconditions`,
      diffUrlApi: `${this.URL}api/tgv/paymentconditions/diff`,
      deletedField: 'd_e_l_e_t_',
      fields: [
        'id',
        'codigo',
        'descricao'
      ],
      idField: 'id',
      name: 'PaymentConditions',
      pageSize: 500
    };
    return paymentConditionSchema;
  }

  getSchemaFinancialSecurities(): PoSyncSchema {
    let financialSecurities: PoSyncSchema;
    financialSecurities = {
      getUrlApi: `http://vmcrm66140.sp01.local:8282/rest/api/tgv/financialsecurities`,
      diffUrlApi: `http://vmcrm66140.sp01.local:8282/rest/api/tgv/financialsecurities/diff`,
      deletedField: 'deleted',
      fields: [
        'id',
        'branchid',
        'prefix',
        'titlecode',
        'installment',
        'type',
        'customerid',
        'customerstore',
        'billvalue',
        'titlebalance',
        'writeofnetvalue',
        'installmentmaturity',
        'issuedate',
        'status'
      ],
      idField: 'id',
      name: 'FinancialSecurities',
      pageSize: 500
    };
    return financialSecurities;
  }

  getSchemaCustomers(): PoSyncSchema {
    let customersSchema: PoSyncSchema;
    customersSchema = {
      getUrlApi: `${this.URL}api/tgv/customers`,
      diffUrlApi: `${this.URL}api/tgv/customers/diff`,
      deletedField: 'deleted',
      fields: [
        'id',
        'branch',
        'code',
        'store',
        'name',
        'fantasy',
        'municipalregistration',
        'estadualregistration',
        'customertype',
        'personType',
        'cgc',
        'paymentconditions',
        'pricelist',
        'cnae',
        'vendor',
        'citycode',
        'city',
        'neighborhood',
        'address',
        'addresscomplement',
        'zipcode',
        'uf',
        'ufdescription',
        'ddi',
        'ddd',
        'phone',
        'email',
        'country',
        'countrydescription',
        'contact',
        'risk',
        'creditLimit',
        'lastpurchase',
        'availablecreditlimit',
        'inclusionDate',
        'status'
      ],
      idField: 'id',
      name: 'Customer',
      pageSize: 500
    };
    return customersSchema;
  }

  getSchemaContacts(): PoSyncSchema {
    let contacts: PoSyncSchema;
    contacts = {
      getUrlApi: `${this.URL}api/tgv/contacts`,
      diffUrlApi: `${this.URL}api/tgv/contacts/diff`,
      deletedField: 'd_e_l_e_t_',
      fields: [
        'internalid',
        'contactid',
        'cgcentity',
        'name',
        'email',
        'datetime'
      ],
      idField: 'internalid',
      name: 'Contacts',
      pageSize: 500
    };
    return contacts;
  }

  getSchemaPhoneContacs(): PoSyncSchema {
    let phoneContacs: PoSyncSchema;
    phoneContacs = {
      getUrlApi: `${this.URL}api/tgv/phonecontacts`,
      diffUrlApi: `${this.URL}api/tgv/phonecontacts/diff`,
      deletedField: 'd_e_l_e_t_',
      fields: [
        'internalid',
        'contactinternalid',
        'phonetype',
        'ddd',
        'ddi',
        'phone',
        'email',
        'complement',
        'datetime'
      ],
      idField: 'internalid',
      name: 'PhoneContacts',
      pageSize: 5000
    };
    return phoneContacs;
  }

  getSchemaFinancialStatusCustomer(): PoSyncSchema {
    let financialStatusCustomer: PoSyncSchema;
    financialStatusCustomer = {
      getUrlApi: `${this.URL}api/tgv/financialcustomerstatus`,
      diffUrlApi: `${this.URL}api/tgv/financialcustomerstatus/diff`,
      deletedField: 'deleted',
      fields: [
        'id',
        'code',
        'oldestdue',
        'branch'
      ],
      idField: 'id',
      name: 'FinancialStatusCustomer',
      pageSize: 500
    };
    return financialStatusCustomer;
  }
  getSchemaAll(): Array<any> {
    const schemas = [];
    //schemas.push(this.getSchemaNotifications());
    //schemas.push(this.getSchemaPaymentConditions());
    //schemas.push(this.getSchemaFinancialSecurities());
    //schemas.push(this.getSchemaContacts());
    schemas.push(this.getSchemaPhoneContacs());
    //schemas.push(this.getSchemaFinancialStatusCustomer());
    return schemas;
  }

}
