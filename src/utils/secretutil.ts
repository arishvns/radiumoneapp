import { settings } from '../settings'
import dotenv from 'dotenv';

dotenv.config = settings.GetEnvironmentConfig();

class SecretUtil {

    //Define the node environment
    public PORT = process.env.NODE_PORT;
    public HOST = process.env.NODE_HOST;

    //Define MongoDB Server
    public MONGODB_SERVER = process.env.MONGODB_SERVER;
    public MONGODB_USERNAME = process.env.MONGODB_USERNAME;
    public MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
    public MONGODB_DBNAME = process.env.MONGODB_DBNAME;
    
    public ssl = "https";
    
    public Domain = "dev-build.radiumone.io/v3/uiapi";
    public ReceiptImgDomain = "dev-build.radiumone.io/vi";
    public AuthToken_PATH = "/authenticate";
    //  Dashboard endPoints
    public TopCustomerCount_PATH = "/dashboard/topCustomerCount";
    
    public Reseller_PATH = "/dashboard/reseller";
    public DonutCardStats_PATH = "/dashboard/donutCardStats";
    public TopCustomerAmt_PATH = "/dashboard/topCustomerAmt";
    public GeneralStats_PATH = "/dashboard/generalStats";
    public GeneralDayAndWeekCountStats_PATH = "/dashboard/generalDayAndWeekCountStats";
    public GeneralDayAndWeekVolumeStats_PATH = "/dashboard/generalDayAndWeekVolumeStats";
    public TxnAnalytics_PATH = "/dashboard/txnAnalytics";
    public SettleSummary_PATH = "/dashboard/settleSummary";
    public BankCardStats_PATH = "/dashboard/bankCardStats";
    public TopCardtype_PATH = "/dashboard/topCardtype";
    public DashboardCard_PATH = "/dashboard/dashboardCard";
    public AnalyticsCard_PATH = "/dashboard/analyticsCard";
    public TopCustomerCardList = "/dashboard/topCustomerCardList";
    public Transaction1_PATH = "/digitalReceipt/transaction"
    
    
    // Receipts
    public Config_PATH = "/receipt/transactions/config"
    public TransactionDate_PATH = "/receipt/transactions/date";
    public TransactionList_PATH = "/receipt/transactions";
    public TransactionReceipt_PATH = "/receipt/transactions/export/pdf_receipt/";
    public TransactionReceiptImg_PATH = "/receipt/transactions/printCount/";
    public TransactionUploadInit_PATH= "/receipt/manual/uploads/init";
    public TransactionUploadProcessReceipt_PATH ="/receipt/manual/uploads/process/receipt";
    public TransactionUploadReceiptCardTransTypeList_Path = "/uploadreceipts/cards";
    public exportTransaction_PATH = "/receipt/transactions/export/excel/"
    public GetDate_Path = "/receipt/settlements/date";
    public settlement_Path = "/receipt/settlements";

    //Payment Gateway paths 
    public PaymentGatewayTransaction_PATH = "/main/paygate/transaction/"
    public PaymentGatewayGetSettlementList_PATH= "/paygate/settlement/getSettlementList/"
    // public PaymentGatewayTransactionWithQueryParameters_PATH = "/main/paygate/transaction/"

    // PayNow Paths 
    public PayNowTransaction_PATH = "/main/paynow/transaction/"
    public PayNowGetCreateData_PATH = "/main/paynow/payment/getCreateData/"
    public PayNowBankStatement_PATH = "/main/paynow/bankstatement/"
    public PayNowBankStatementWithQueryParams_PATH = "/main/paynow/bankstatement/"
    public PayNowGetReportTypes_PATH = "/main/paynow/reports/getReportTypes/"
    public PayNowGetReportTypesOnSearch_PATH = "/main/paynow/reports/"
    public PayNowGetReportTypesOnSearchFilter_PATH = "/main/paynow/reports/"
    public PayNowPaymentAdvice_PATH = "/main/paynow/payment/"
    public PayNowMasterAccount_PATH= "/main/paynow/account/getData/"
   

    //PreAuthorisation Path 
    public preAuthInIt_PATH = "/preAuth/init/"
    public preAuthFilterList_PATH = "/preAuth/list/"
    public preAuthDeviceHealth_PATH = "/preAuth/device/health/"
    public preAuthDebitCardBin_PATH = "/config/bin/list/"
    public preAuthDebitCardBinUpload_PATH = "/config/bin/upload/"
    public preAuthDebitCardBinActivate_Path = "/config/bin/activate/"
    public preAuthLocalServer_PATH="/hotelServer/device/list/"
    public preAuthServerHealth_PATH="/preAuth/device/health/details/"
    
    //Lead Management Path 
    public LeadMngGenerateLead_PATH= "/main/leadManagement/generateLead/"
    public LeadMngFollowLead_PATH= "/main/leadManagement/followLead/"
    public LeadMngFollowLeadUpdate_PATH = "/main/leadManagement/followLead/update"
    public LeadMngEditFollowLead_Path = "/main/leadManagement/generateLead/edit/"
    public LeadMngRegisterationReport_PATH= "/report/init/list/"
    
    // ScheduleJobs Path 
    public gbcc_PATH= "/main/admin/dailyrun/gdbcc/"

    // User component paths
    
    public DigitalUsers_PATH= "/users/"
    public DigitalUsersInit_PATH= "/users/init"
    public DigitalUsersSearchForm_PATH= "/users/searchForm"
    public DigitalUsersTimeZone_PATH = "/user/timezone/getTimezoneByCountry/200"
    

    // Configuration Path
    public ConfigMerchant_Path = "/main/admin/merchants/"
    public ConfigBranchCode_Path = "/main/admin/merchants/branch_code/"
    public ConfigPaymentAccountGetInItData_Path = "/main/config/payment/account/getInitData/"
    public ConfigPaymentAccount_Path = "/main/config/payment/account/"
    public ConfigDevice_Path = "/configuration/devices/"
    public ConfigSearchDeviceOnFilter_Path = "/configuration/devices/"
    public ConfigAcquirerGroup_Path = "/main/admin/acquirers/"
    public ConfigAdditional_Path = "/main/admin/paygate/additionals/"
    public ConfigReceiptLogo_Path = "/config/receiptLogo/list/1"
    public ConfigSoftwareSetup_Path = "/main/admin/software/list/"
    public ConfigAuthExpirySearch_Path = "/authExpiry/search"
    public ConfigBlockedDevices_Path = "/issues/blockTid/list/"
    public ConfigTokenAccess_Path = "/config/tokenizations/"
    public ConfigPayNowDevices_Path = "/config/paynow/devices/"

    // Receipt Imager Path
    public ReceiptImager_PATH = "/drs/issues/imager/getAll/"

    //  Admin Users endPoints
    public AddNewUser_PATH = "/main/admin/user/addNewUser";
    public AdminUser_PATH= "/main/admin/user/";
    public SearchForm_PATH = "/main/admin/user/searchForm"

    // Default url 
    
    public GetUrlPath_PATH ="/logo/getUrlPath";
    public FooterVersion_PATH = "/footer/version"
    
    public token ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXNoYW50QHRlY2hjb21waWxlci5jb20iLCJ1c2VySWQiOjM0NSwiZmlyc3ROYW1lIjoiTmlzaGFudCIsImxhc3ROYW1lIjoiLi4iLCJncmFudGVkUGVybWlzc2lvbnMiOlsiUl9BQ1FNX0EiLCJSX0FDUU1fRCIsIlJfQUNRTV9FIiwiUl9BQ1FNX01EIiwiUl9BQ1FNX1YiLCJSX0FEREJfQSIsIlJfQUREQl9EIiwiUl9BRERCX0UiLCJSX0FEREJfTUQiLCJSX0FEREJfViIsIlJfQURNTV9BIiwiUl9BRE1NX0QiLCJSX0FETU1fRSIsIlJfQURNTV9NRCIsIlJfQURNTV9WIiwiUl9BVUVQX0EiLCJSX0FVRVBfRCIsIlJfQVVFUF9FIiwiUl9BVUVQX01EIiwiUl9BVUVQX1YiLCJSX0JGVUxfQSIsIlJfQkZVTF9EIiwiUl9CRlVMX0UiLCJSX0JGVUxfTUQiLCJSX0JGVUxfViIsIlJfQklMTV9BIiwiUl9CSUxNX0QiLCJSX0JJTE1fRSIsIlJfQklMTV9NRCIsIlJfQklMTV9WIiwiUl9CSVRVX0EiLCJSX0JJVFVfRCIsIlJfQklUVV9FIiwiUl9CSVRVX01EIiwiUl9CSVRVX1YiLCJSX0JSSE1fQSIsIlJfQlJITV9EIiwiUl9CUkhNX0UiLCJSX0JSSE1fTUQiLCJSX0JSSE1fViIsIlJfQlRJRF9BIiwiUl9CVElEX0QiLCJSX0JUSURfRSIsIlJfQlRJRF9NRCIsIlJfQlRJRF9WIiwiUl9DQVFNX0EiLCJSX0NBUU1fRCIsIlJfQ0FRTV9FIiwiUl9DQVFNX01EIiwiUl9DQVFNX1YiLCJSX0NGQ0lfQSIsIlJfQ0ZDSV9EIiwiUl9DRkNJX0UiLCJSX0NGQ0lfTUQiLCJSX0NGQ0lfViIsIlJfQ0ZDTV9BIiwiUl9DRkNNX0QiLCJSX0NGQ01fRSIsIlJfQ0ZDTV9NRCIsIlJfQ0ZDTV9WIiwiUl9DRkNSX0EiLCJSX0NGQ1JfRCIsIlJfQ0ZDUl9FIiwiUl9DRkNSX01EIiwiUl9DRkNSX1YiLCJSX0NGTEFfQSIsIlJfQ0ZMQV9EIiwiUl9DRkxBX0UiLCJSX0NGTEFfTUQiLCJSX0NGTEFfViIsIlJfQ0ZQRl9BIiwiUl9DRlBGX0QiLCJSX0NGUEZfRSIsIlJfQ0ZQRl9NRCIsIlJfQ0ZQRl9WIiwiUl9DRlRNX0EiLCJSX0NGVE1fRCIsIlJfQ0ZUTV9FIiwiUl9DRlRNX01EIiwiUl9DRlRNX1YiLCJSX0NGVFpfQSIsIlJfQ0ZUWl9EIiwiUl9DRlRaX0UiLCJSX0NGVFpfTUQiLCJSX0NGVFpfViIsIlJfRENDTV9BIiwiUl9EQ0NNX0QiLCJSX0RDQ01fRSIsIlJfRENDTV9NRCIsIlJfRENDTV9WIiwiUl9EUlNJX0EiLCJSX0RSU0lfRCIsIlJfRFJTSV9FIiwiUl9EUlNJX01EIiwiUl9EUlNJX1YiLCJSX0RTQk1fQSIsIlJfRFNCTV9EIiwiUl9EU0JNX0UiLCJSX0RTQk1fTUQiLCJSX0RTQk1fViIsIlJfRVhDTl9BIiwiUl9FWENOX0QiLCJSX0VYQ05fRSIsIlJfRVhDTl9NRCIsIlJfRVhDTl9WIiwiUl9IRUFMX0EiLCJSX0hFQUxfRCIsIlJfSEVBTF9FIiwiUl9IRUFMX01EIiwiUl9IRUFMX1YiLCJSX0hPVExfQSIsIlJfSE9UTF9EIiwiUl9IT1RMX0UiLCJSX0hPVExfTUQiLCJSX0hPVExfViIsIlJfSFNZU19BIiwiUl9IU1lTX0QiLCJSX0hTWVNfRSIsIlJfSFNZU19NRCIsIlJfSFNZU19WIiwiUl9IVFhVX0EiLCJSX0hUWFVfRCIsIlJfSFRYVV9FIiwiUl9IVFhVX01EIiwiUl9IVFhVX1YiLCJSX0lNUE1fQSIsIlJfSU1QTV9EIiwiUl9JTVBNX0UiLCJSX0lNUE1fTUQiLCJSX0lNUE1fViIsIlJfSU5DTV9BIiwiUl9JTkNNX0QiLCJSX0lOQ01fRSIsIlJfSU5DTV9NRCIsIlJfSU5DTV9WIiwiUl9LRUtJX0EiLCJSX0tFS0lfRCIsIlJfS0VLSV9FIiwiUl9LRUtJX01EIiwiUl9LRUtJX1YiLCJSX0tFS1NfQSIsIlJfS0VLU19EIiwiUl9LRUtTX0UiLCJSX0tFS1NfTUQiLCJSX0tFS1NfViIsIlJfS0lOVF9BIiwiUl9LSU5UX0QiLCJSX0tJTlRfRSIsIlJfS0lOVF9NRCIsIlJfS0lOVF9WIiwiUl9MTUZMX0EiLCJSX0xNRkxfRCIsIlJfTE1GTF9FIiwiUl9MTUZMX01EIiwiUl9MTUZMX1YiLCJSX0xNTUxfQSIsIlJfTE1NTF9EIiwiUl9MTU1MX0UiLCJSX0xNTUxfTUQiLCJSX0xNTUxfViIsIlJfTE1SRV9BIiwiUl9MTVJFX0QiLCJSX0xNUkVfRSIsIlJfTE1SRV9NRCIsIlJfTE1SRV9WIiwiUl9NQVVQX0EiLCJSX01BVVBfRCIsIlJfTUFVUF9FIiwiUl9NQVVQX01EIiwiUl9NQVVQX1YiLCJSX01DQ09fQSIsIlJfTUNDT19EIiwiUl9NQ0NPX0UiLCJSX01DQ09fTUQiLCJSX01DQ09fViIsIlJfTUVSTV9BIiwiUl9NRVJNX0QiLCJSX01FUk1fRSIsIlJfTUVSTV9NRCIsIlJfTUVSTV9WIiwiUl9OT1RNX0EiLCJSX05PVE1fRCIsIlJfTk9UTV9FIiwiUl9OT1RNX01EIiwiUl9OT1RNX1YiLCJSX1BBUk1fQSIsIlJfUEFSTV9EIiwiUl9QQVJNX0UiLCJSX1BBUk1fTUQiLCJSX1BBUk1fViIsIlJfUEdBTV9BIiwiUl9QR0FNX0QiLCJSX1BHQU1fRSIsIlJfUEdBTV9NRCIsIlJfUEdBTV9WIiwiUl9QR0RNX0EiLCJSX1BHRE1fRCIsIlJfUEdETV9FIiwiUl9QR0RNX01EIiwiUl9QR0RNX1YiLCJSX1BHSE1fQSIsIlJfUEdITV9EIiwiUl9QR0hNX0UiLCJSX1BHSE1fTUQiLCJSX1BHSE1fViIsIlJfUEdTVF9BIiwiUl9QR1NUX0QiLCJSX1BHU1RfRSIsIlJfUEdTVF9NRCIsIlJfUEdTVF9WIiwiUl9QR1RYX0EiLCJSX1BHVFhfRCIsIlJfUEdUWF9FIiwiUl9QR1RYX01EIiwiUl9QR1RYX1YiLCJSX1BHVlRfQSIsIlJfUEdWVF9EIiwiUl9QR1ZUX0UiLCJSX1BHVlRfTUQiLCJSX1BHVlRfViIsIlJfUE1BTV9BIiwiUl9QTUFNX0QiLCJSX1BNQU1fRSIsIlJfUE1BTV9NRCIsIlJfUE1BTV9WIiwiUl9QTURCX0EiLCJSX1BNREJfRCIsIlJfUE1EQl9FIiwiUl9QTURCX01EIiwiUl9QTURCX1YiLCJSX1BNSE1fQSIsIlJfUE1ITV9EIiwiUl9QTUhNX0UiLCJSX1BNSE1fTUQiLCJSX1BNSE1fViIsIlJfUE1JTV9BIiwiUl9QTUlNX0QiLCJSX1BNSU1fRSIsIlJfUE1JTV9NRCIsIlJfUE1JTV9WIiwiUl9QTU1NX0EiLCJSX1BNTU1fRCIsIlJfUE1NTV9FIiwiUl9QTU1NX01EIiwiUl9QTU1NX1YiLCJSX1BNTVFfQSIsIlJfUE1NUV9EIiwiUl9QTU1RX0UiLCJSX1BNTVFfTUQiLCJSX1BNTVFfViIsIlJfUE1QS19BIiwiUl9QTVBLX0QiLCJSX1BNUEtfRSIsIlJfUE1QS19NRCIsIlJfUE1QS19WIiwiUl9QTVdaX0EiLCJSX1BNV1pfRCIsIlJfUE1XWl9FIiwiUl9QTVdaX01EIiwiUl9QTVdaX1YiLCJSX1BOQU1fQSIsIlJfUE5BTV9EIiwiUl9QTkFNX0UiLCJSX1BOQU1fTUQiLCJSX1BOQU1fViIsIlJfUE5CTV9BIiwiUl9QTkJNX0QiLCJSX1BOQk1fRSIsIlJfUE5CTV9NRCIsIlJfUE5CTV9WIiwiUl9QTkRNX0EiLCJSX1BORE1fRCIsIlJfUE5ETV9FIiwiUl9QTkRNX01EIiwiUl9QTkRNX1YiLCJSX1BOUE1fQSIsIlJfUE5QTV9EIiwiUl9QTlBNX0UiLCJSX1BOUE1fTUQiLCJSX1BOUE1fViIsIlJfUE5STV9BIiwiUl9QTlJNX0QiLCJSX1BOUk1fRSIsIlJfUE5STV9NRCIsIlJfUE5STV9WIiwiUl9QTlRNX0EiLCJSX1BOVE1fRCIsIlJfUE5UTV9FIiwiUl9QTlRNX01EIiwiUl9QTlRNX1YiLCJSX1BSRUFfQSIsIlJfUFJFQV9EIiwiUl9QUkVBX0UiLCJSX1BSRUFfTUQiLCJSX1BSRUFfViIsIlJfUkxHTV9BIiwiUl9STEdNX0QiLCJSX1JMR01fRSIsIlJfUkxHTV9NRCIsIlJfUkxHTV9WIiwiUl9TQ01NX0EiLCJSX1NDTU1fRCIsIlJfU0NNTV9FIiwiUl9TQ01NX01EIiwiUl9TQ01NX1YiLCJSX1NFVExfQSIsIlJfU0VUTF9EIiwiUl9TRVRMX0UiLCJSX1NFVExfTUQiLCJSX1NFVExfViIsIlJfU0VUTV9BIiwiUl9TRVRNX0QiLCJSX1NFVE1fRSIsIlJfU0VUTV9NRCIsIlJfU0VUTV9WIiwiUl9TTUFKX0EiLCJSX1NNQUpfRCIsIlJfU01BSl9FIiwiUl9TTUFKX01EIiwiUl9TTUFKX1YiLCJSX1NNQVNfQSIsIlJfU01BU19EIiwiUl9TTUFTX0UiLCJSX1NNQVNfTUQiLCJSX1NNQVNfViIsIlJfU01TRF9BIiwiUl9TTVNEX0QiLCJSX1NNU0RfRSIsIlJfU01TRF9NRCIsIlJfU01TRF9WIiwiUl9TT0ZUX0EiLCJSX1NPRlRfRCIsIlJfU09GVF9FIiwiUl9TT0ZUX01EIiwiUl9TT0ZUX1YiLCJSX1NTUE1fQSIsIlJfU1NQTV9EIiwiUl9TU1BNX0UiLCJSX1NTUE1fTUQiLCJSX1NTUE1fViIsIlJfU1NSTV9BIiwiUl9TU1JNX0QiLCJSX1NTUk1fRSIsIlJfU1NSTV9NRCIsIlJfU1NSTV9WIiwiUl9TU1VNX0EiLCJSX1NTVU1fRCIsIlJfU1NVTV9FIiwiUl9TU1VNX01EIiwiUl9TU1VNX1YiLCJSX1RYTk1fQSIsIlJfVFhOTV9EIiwiUl9UWE5NX0UiLCJSX1RYTk1fTUQiLCJSX1RYTk1fViIsIlJfVFhSVF9BIiwiUl9UWFJUX0QiLCJSX1RYUlRfRSIsIlJfVFhSVF9NRCIsIlJfVFhSVF9WIl0sImV4cCI6MTY3MDkxNTY2MX0.mL_diQkZzYk7p7HigssrPiG0yDmCsR0fwkH76eLZnDCoTYdLds2xUM8x4Q1E2ow3TNiXxSektWrKbnl1a_4cjQ";

}

export const secretUtil = new SecretUtil();