package com.EcommerceApp.service;

import com.EcommerceApp.dto.PaymentInfo;
import com.EcommerceApp.dto.Purchase;
import com.EcommerceApp.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent creatPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
