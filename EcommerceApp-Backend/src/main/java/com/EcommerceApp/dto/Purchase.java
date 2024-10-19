package com.EcommerceApp.dto;


import com.EcommerceApp.entity.Address;
import com.EcommerceApp.entity.Customer;
import com.EcommerceApp.entity.Order;
import com.EcommerceApp.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
