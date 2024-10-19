package com.EcommerceApp.controller;

import com.EcommerceApp.dto.PaymentInfo;
import com.EcommerceApp.dto.Purchase;
import com.EcommerceApp.dto.PurchaseResponse;
import com.EcommerceApp.service.CheckoutService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    private Logger logger = Logger.getLogger(getClass().getName());

    private CheckoutService checkoutService;

    private CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }
    @PostMapping("/payment-intent")
    public ResponseEntity<String> creatPaymentIntent(@RequestBody PaymentInfo paymentInfo) throws StripeException {

        logger.info("paymentInfo.amount: " + paymentInfo.getAmount());

        PaymentIntent paymentIntent = checkoutService.creatPaymentIntent(paymentInfo);

        String paymentStr = paymentIntent.toJson();

        return new ResponseEntity<>(paymentStr, HttpStatus.OK);
    }
}


