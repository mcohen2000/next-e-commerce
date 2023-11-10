import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CartItem, StripeDictionary } from "@/app/lib/products/types";

export async function POST(req: NextRequest){
    const priceIdList:StripeDictionary = {
        'black-logo-white-tee': {
            'XS': 'price_1OAeuWBUXLAqO3kgzHopIDzz',
            'S': 'price_1OAhLOBUXLAqO3kgCjKox71P',
            'M': 'price_1OAhQEBUXLAqO3kguqnzTxyf',
            'L': 'price_1OAhYCBUXLAqO3kgo3iPMdmM',
            'XL': 'price_1OAhZYBUXLAqO3kgk8dxaqlz',
        },
        'white-logo-black-tee': {
            'XS': 'price_1OAetlBUXLAqO3kgQ9oEAswy',
            'S': 'price_1OAhMzBUXLAqO3kgGUwQx1VO',
            'M': 'price_1OAhP8BUXLAqO3kgPe8ibWKI',
            'L': 'price_1OAhWFBUXLAqO3kg9SNsLbPn',
            'XL': 'price_1OAhZ1BUXLAqO3kgQLrUm2Ka',
        },
        'black-logo-sticker': {
            'XS': 'price_1OAezABUXLAqO3kgrtWSILXA',
            'S': 'price_1OAhjVBUXLAqO3kgFFCJOTxb',
            'M': 'price_1OAhkGBUXLAqO3kgLTOL4Orz',
            'L': 'price_1OAhkxBUXLAqO3kgKQcYvyVK',
            'XL': 'price_1OAhlXBUXLAqO3kgBdkTuF3e',
        },
        'white-logo-sticker': {
            'XS': 'price_1OAeypBUXLAqO3kgavj6GEkf',
            'S': 'price_1OAhfWBUXLAqO3kgiVMC6wbf',
            'M': 'price_1OAhgHBUXLAqO3kgvU33d5hV',
            'L': 'price_1OAhgdBUXLAqO3kgSJktF1XM',
            'XL': 'price_1OAhhKBUXLAqO3kgyzwxYddt',
        }
    }
    const body = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        line_items: 
            body.cart.map((item: CartItem) => ({price: priceIdList[`${item.product.id}`][`${item.size}`], quantity: item.quantity}))
        ,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/products`
    });
    return NextResponse.json(session.url);
}