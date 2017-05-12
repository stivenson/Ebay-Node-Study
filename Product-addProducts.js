/**
 * example ebay API request to Trading:GetUser
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'addItem',

  devId: '8a649e9b-1896-489b-bc6e-d0fb2722978b',
  certId: 'PRD-08faa0a38c5b-88a6-4c15-ab0f-75f4',
  appId: 'Stivenso-cuembyte-PRD-d08faa0a3-48967901',
  sandbox: false,
  authToken: 'AgAAAA**AQAAAA**aAAAAA**JgYVWQ**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6ACkoCkDZKKpA6dj6x9nY+seQ**jroDAA**AAMAAA**v+6GaCZK/BqyCrwTYiNjM+1cEf0lwS09of3b3N8eFEbs63/m0mncGYSDEGMNknpGNKptAm+BqcU5q2SmFAbk7ZWuirujXzIcvkkDz8JlLnEOmPSXRa0+OUTQyCskgXQTFulLBxdfAgiRRnn8GnmcZJHsrZ6i8QV1OT8gHqWtgo/xtSp3Z5dCdBhnUYdOPt+XeQkoc7ncaNUwl2lAalcpeAw5USyeeJme02/8/SfFtBF7BY1AbdC3sQdK3IyklOyIEvR69oYqgr0Quikm3hMAuzB9KZ72TaovbtMMyS1M3v4pDfK2CtXROWfC0w+mdmY1sF1IRgCDpCQPbIyHM3podJqnyTnyUrjVNiR3FcLTzMbwNuYjjW43Oo1zZkooO4RauRWZasjgp0FdlhUjfHujwOIccygHxy22rsKyEmsVsPyrWXuUXIcvnavtMp5y+SrRIICoC6Yf+71f4iq9NqyrNI1f+KFDOuX4ENj+18kRmPOV26MsREgsALgm60lD2yrzOnR20Nzj6Zfp8LoYIW+TQStaJmIKruYUHSHyM1cbLWO3jCdmpllW46dlW6RJnX5Auq8DKcZQUlULv6QT+e72B557INMePSQDyhzsweePfoQ5uRTsEs0mBcWyUZa8VB9XcCb97YBU6k3IIoweNERyNVVPeUO5J3QzslK1Fe0zDO097ZxIfBLpGGZohDrd9xpy0dvKAVkqN9fFAs4yYgT0Csvv3/xgRe1C3hRns7V5wYHPTLGodEpok/9e06r4HF1Y',

  params: {
    "Item": {
      "#text": " ItemType",
      "ApplicationData": " string ",
      "AttributeArray": {
        "#text": " AttributeArrayType",
        "Attribute": {
          "-attributeLabel": "string",
          "#text": " AttributeType",
          "Value": {
            "#text": " ValType",
            "ValueLiteral": " string "
          }
        }
      },
      "AutoPay": " boolean ",
      "BestOfferDetails": {
        "#text": " BestOfferDetailsType",
        "BestOfferEnabled": " boolean "
      },
      "BuyerRequirementDetails": {
        "#text": " BuyerRequirementDetailsType",
        "LinkedPayPalAccount": " boolean ",
        "MaximumBuyerPolicyViolations": {
          "#text": " MaximumBuyerPolicyViolationsType",
          "Count": " int ",
          "Period": " PeriodCodeType "
        },
        "MaximumItemRequirements": {
          "#text": " MaximumItemRequirementsType",
          "MaximumItemCount": " int ",
          "MinimumFeedbackScore": " int "
        },
        "MaximumUnpaidItemStrikesInfo": {
          "#text": " MaximumUnpaidItemStrikesInfoType",
          "Count": " int ",
          "Period": " PeriodCodeType "
        },
        "MinimumFeedbackScore": " int ",
        "ShipToRegistrationCountry": " boolean ",
        "VerifiedUserRequirements": {
          "#text": " VerifiedUserRequirementsType",
          "MinimumFeedbackScore": " int ",
          "VerifiedUser": " boolean "
        },
        "ZeroFeedbackScore": " boolean "
      },
      "BuyerResponsibleForShipping": " boolean ",
      "BuyItNowPrice": {
        "-currencyID": "CurrencyCodeType",
        "#text": " AmountType (double) "
      },
      "CategoryBasedAttributesPrefill": " boolean ",
      "CategoryMappingAllowed": " boolean ",
      "Charity": {
        "#text": " CharityType",
        "CharityID": " string ",
        "CharityNumber": " int ",
        "DonationPercent": " float "
      },
      "ConditionDescription": " string ",
      "ConditionID": " int ",
      "Country": " CountryCodeType ",
      "CrossBorderTrade": " string ",
      "Currency": " CurrencyCodeType ",
      "Description": " string ",
      "DigitalGoodInfo": {
        "#text": " DigitalGoodInfoType",
        "DigitalDelivery": " boolean "
      },
      "DisableBuyerRequirements": " boolean ",
      "DiscountPriceInfo": {
        "#text": " DiscountPriceInfoType",
        "MadeForOutletComparisonPrice": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        },
        "MinimumAdvertisedPrice": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        },
        "MinimumAdvertisedPriceExposure": " MinimumAdvertisedPriceExposureCodeType ",
        "OriginalRetailPrice": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        },
        "SoldOffeBay": " boolean ",
        "SoldOneBay": " boolean "
      },
      "DispatchTimeMax": " int ",
      "eBayNowEligible": " boolean ",
      "eBayPlus": " boolean ",
      "ExtendedSellerContactDetails": {
        "#text": " ExtendedContactDetailsType",
        "ClassifiedAdContactByEmailEnabled": " boolean ",
        "ContactHoursDetails": {
          "#text": " ContactHoursDetailsType",
          "Hours1AnyTime": " boolean ",
          "Hours1Days": " DaysCodeType ",
          "Hours1From": " time ",
          "Hours1To": " time ",
          "Hours2AnyTime": " boolean ",
          "Hours2Days": " DaysCodeType ",
          "Hours2From": " time ",
          "Hours2To": " time ",
          "TimeZoneID": " string "
        }
      },
      "GiftIcon": " int ",
      "GiftServices": " GiftServicesCodeType ",
      "HitCounter": " HitCounterCodeType ",
      "IncludeRecommendations": " boolean ",
      "ItemCompatibilityList": {
        "#text": " ItemCompatibilityListType",
        "Compatibility": {
          "#text": " ItemCompatibilityType",
          "CompatibilityNotes": " string ",
          "NameValueList": {
            "#text": " NameValueListType",
            "Name": " string ",
            "Value": " string "
          }
        }
      },
      "ItemSpecifics": {
        "#text": " NameValueListArrayType",
        "NameValueList": {
          "#text": " NameValueListType",
          "Name": " string ",
          "Value": " string "
        }
      },
      "ListingDesigner": {
        "#text": " ListingDesignerType",
        "LayoutID": " int ",
        "OptimalPictureSize": " boolean ",
        "ThemeID": " int "
      },
      "ListingDetails": {
        "#text": " ListingDetailsType",
        "BestOfferAutoAcceptPrice": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        },
        "LocalListingDistance": " string ",
        "MinimumBestOfferPrice": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        }
      },
      "ListingDuration": " token ",
      "ListingEnhancement": " ListingEnhancementsCodeType ",
      "ListingSubtype2": " ListingSubtypeCodeType ",
      "ListingType": " ListingTypeCodeType ",
      "LiveAuction": " boolean ",
      "Location": " string ",
      "LotSize": " int ",
      "MotorsGermanySearchable": " boolean ",
      "PaymentDetails": {
        "#text": " PaymentDetailsType",
        "DaysToFullPayment": " int ",
        "DepositAmount": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        },
        "DepositType": " DepositTypeCodeType ",
        "HoursToDeposit": " int "
      },
      "PaymentMethods": " BuyerPaymentMethodCodeType ",
      "PayPalEmailAddress": " string ",
      "PickupInStoreDetails": {
        "#text": " PickupInStoreDetailsType",
        "EligibleForPickupDropOff": " boolean ",
        "EligibleForPickupInStore": " boolean "
      },
      "PictureDetails": {
        "#text": " PictureDetailsType",
        "GalleryDuration": " token ",
        "GalleryType": " GalleryTypeCodeType ",
        "PhotoDisplay": " PhotoDisplayCodeType ",
        "PictureURL": " anyURI "
      },
      "PostalCode": " string ",
      "PrimaryCategory": {
        "#text": " CategoryType",
        "CategoryID": " string "
      },
      "PrivateListing": " boolean ",
      "ProductListingDetails": {
        "#text": " ProductListingDetailsType",
        "BrandMPN": {
          "#text": " BrandMPNType",
          "Brand": " string ",
          "MPN": " string "
        },
        "EAN": " string ",
        "IncludeeBayProductDetails": " boolean ",
        "IncludeStockPhotoURL": " boolean ",
        "ISBN": " string ",
        "NameValueList": {
          "#text": " NameValueListType",
          "Name": " string ",
          "Value": " string "
        },
        "ProductReferenceID": " string ",
        "ReturnSearchResultOnDuplicates": " boolean ",
        "TicketListingDetails": {
          "#text": " TicketListingDetailsType",
          "EventTitle": " string ",
          "PrintedDate": " string ",
          "PrintedTime": " string ",
          "Venue": " string "
        },
        "UPC": " string ",
        "UseFirstProduct": " boolean ",
        "UseStockPhotoURLAsGallery": " boolean "
      },
      "Quantity": " int ",
      "QuantityInfo": {
        "#text": " QuantityInfoType",
        "MinimumRemnantSet": " int "
      },
      "QuantityRestrictionPerBuyer": {
        "#text": " QuantityRestrictionPerBuyerInfoType",
        "MaximumQuantity": " int "
      },
      "ReservePrice": {
        "-currencyID": "CurrencyCodeType",
        "#text": " AmountType (double) "
      },
      "ReturnPolicy": {
        "#text": " ReturnPolicyType",
        "Description": " string ",
        "ExtendedHolidayReturns": " boolean ",
        "RefundOption": " token ",
        "RestockingFeeValueOption": " token ",
        "ReturnsAcceptedOption": " token ",
        "ReturnsWithinOption": " token ",
        "ShippingCostPaidByOption": " token ",
        "WarrantyDurationOption": " token ",
        "WarrantyOfferedOption": " token ",
        "WarrantyTypeOption": " token "
      },
      "ScheduleTime": " dateTime ",
      "SecondaryCategory": {
        "#text": " CategoryType",
        "CategoryID": " string "
      },
      "Seller": {
        "#text": " UserType",
        "MotorsDealer": " boolean "
      },
      "SellerContactDetails": {
        "#text": " AddressType",
        "CompanyName": " string ",
        "County": " string ",
        "Phone2AreaOrCityCode": " string ",
        "Phone2CountryCode": " CountryCodeType ",
        "Phone2LocalNumber": " string ",
        "PhoneAreaOrCityCode": " string ",
        "PhoneCountryCode": " CountryCodeType ",
        "PhoneLocalNumber": " string ",
        "Street": " string ",
        "Street2": " string "
      },
      "SellerInventoryID": " string ",
      "SellerProfiles": {
        "#text": " SellerProfilesType",
        "SellerPaymentProfile": {
          "#text": " SellerPaymentProfileType",
          "PaymentProfileID": " long ",
          "PaymentProfileName": " string "
        },
        "SellerReturnProfile": {
          "#text": " SellerReturnProfileType",
          "ReturnProfileID": " long ",
          "ReturnProfileName": " string "
        },
        "SellerShippingProfile": {
          "#text": " SellerShippingProfileType",
          "ShippingProfileID": " long ",
          "ShippingProfileName": " string "
        }
      },
      "SellerProvidedTitle": " string ",
      "ShippingDetails": {
        "#text": " ShippingDetailsType",
        "CalculatedShippingRate": {
          "#text": " CalculatedShippingRateType",
          "InternationalPackagingHandlingCosts": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "MeasurementUnit": " MeasurementSystemCodeType ",
          "OriginatingPostalCode": " string ",
          "PackagingHandlingCosts": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingIrregular": " boolean "
        },
        "CODCost": {
          "-currencyID": "CurrencyCodeType",
          "#text": " AmountType (double) "
        },
        "ExcludeShipToLocation": " string ",
        "GlobalShipping": " boolean ",
        "InsuranceDetails": {
          "#text": " InsuranceDetailsType",
          "InsuranceFee": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "InsuranceOption": " InsuranceOptionCodeType "
        },
        "InternationalInsuranceDetails": {
          "#text": " InsuranceDetailsType",
          "InsuranceFee": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "InsuranceOption": " InsuranceOptionCodeType "
        },
        "InternationalPromotionalShippingDiscount": " boolean ",
        "InternationalShippingDiscountProfileID": " string ",
        "InternationalShippingServiceOption": {
          "#text": " InternationalShippingServiceOptionsType",
          "ShippingService": " token ",
          "ShippingServiceAdditionalCost": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingServiceCost": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingServicePriority": " int ",
          "ShipToLocation": " string "
        },
        "PaymentInstructions": " string ",
        "PromotionalShippingDiscount": " boolean ",
        "RateTableDetails": {
          "#text": " RateTableDetailsType",
          "DomesticRateTable": " string ",
          "InternationalRateTable": " string "
        },
        "SalesTax": {
          "#text": " SalesTaxType",
          "SalesTaxPercent": " float ",
          "SalesTaxState": " string ",
          "ShippingIncludedInTax": " boolean "
        },
        "ShippingDiscountProfileID": " string ",
        "ShippingServiceOptions": {
          "#text": " ShippingServiceOptionsType",
          "FreeShipping": " boolean ",
          "ShippingService": " token ",
          "ShippingServiceAdditionalCost": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingServiceCost": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingServicePriority": " int ",
          "ShippingSurcharge": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          }
        },
        "ShippingType": " ShippingTypeCodeType "
      },
      "ShippingPackageDetails": {
        "#text": " ShipPackageDetailsType",
        "MeasurementUnit": " MeasurementSystemCodeType ",
        "PackageDepth": {
          "-unit": "token",
          "-measurementSystem": "MeasurementSystemCodeType",
          "#text": " MeasureType (decimal) "
        },
        "PackageLength": {
          "-unit": "token",
          "-measurementSystem": "MeasurementSystemCodeType",
          "#text": " MeasureType (decimal) "
        },
        "PackageWidth": {
          "-unit": "token",
          "-measurementSystem": "MeasurementSystemCodeType",
          "#text": " MeasureType (decimal) "
        },
        "ShippingIrregular": " boolean ",
        "ShippingPackage": " ShippingPackageCodeType ",
        "WeightMajor": {
          "-unit": "token",
          "-measurementSystem": "MeasurementSystemCodeType",
          "#text": " MeasureType (decimal) "
        },
        "WeightMinor": {
          "-unit": "token",
          "-measurementSystem": "MeasurementSystemCodeType",
          "#text": " MeasureType (decimal) "
        }
      },
      "ShippingServiceCostOverrideList": {
        "#text": " ShippingServiceCostOverrideListType",
        "ShippingServiceCostOverride": {
          "#text": " ShippingServiceCostOverrideType",
          "ShippingServiceAdditionalCost": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingServiceCost": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          },
          "ShippingServicePriority": " int ",
          "ShippingServiceType": " ShippingServiceType ",
          "ShippingSurcharge": {
            "-currencyID": "CurrencyCodeType",
            "#text": " AmountType (double) "
          }
        }
      },
      "ShippingTermsInDescription": " boolean ",
      "ShipToLocations": " string ",
      "Site": " SiteCodeType ",
      "SKU": " SKUType (string) ",
      "StartPrice": {
        "-currencyID": "CurrencyCodeType",
        "#text": " AmountType (double) "
      },
      "Storefront": {
        "#text": " StorefrontType",
        "StoreCategory2ID": " long ",
        "StoreCategory2Name": " string ",
        "StoreCategoryID": " long ",
        "StoreCategoryName": " string "
      },
      "SubTitle": " string ",
      "TaxCategory": " string ",
      "Title": " string ",
      "UseTaxTable": " boolean ",
      "UUID": " UUIDType (string) ",
      "VATDetails": {
        "#text": " VATDetailsType",
        "BusinessSeller": " boolean ",
        "RestrictedToBusiness": " boolean ",
        "VATPercent": " float "
      },
      "VIN": " string ",
      "VRM": " string "
    },
    "ErrorHandling": " ErrorHandlingCodeType ",
    "ErrorLanguage": " string ",
    "MessageID": " string ",
    "Version": " string ",
    "WarningLevel": " WarningLevelCodeType "
  }

}, function(error, results) {
  console.log(error);
  console.log('---------');
  console.log(results);
});
