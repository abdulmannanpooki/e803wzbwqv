'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '$9',
    description: 'Essential features for personal use',
    features: [
      '1 project',
      '100K API requests',
      'Basic analytics',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Advanced features for professionals',
    features: [
      '10 projects',
      '1M API requests',
      'Advanced analytics',
      'Priority email support',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    description: 'Custom solutions for large teams',
    features: [
      'Unlimited projects',
      'Unlimited API requests',
      'Dedicated support',
      'Custom SLAs',
      'Onboarding & training',
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background-start-rgb/20 to-background-end-rgb/20 py-16 px-6 sm:px-12 lg:px-24">
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Pricing Plans
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
        </p>
      </section>

      <section className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col border ${
              tier.popular
                ? 'border-primary bg-primary/10 shadow-lg'
                : 'border-border bg-card'
            }`}
          >
            <CardHeader className="flex flex-col items-center space-y-2 p-8">
              <div className="flex items-center space-x-2">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                {tier.popular && (
                  <Badge variant="destructive" className="uppercase text-xs font-bold">
                    Popular
                  </Badge>
                )}
              </div>
              <CardDescription className="text-muted-foreground max-w-xs">
                {tier.description}
              </CardDescription>
              <p className="mt-4 text-5xl font-extrabold text-foreground">
                {tier.price}
                {tier.price !== 'Contact us' && (
                  <span className="text-lg font-medium text-muted-foreground">/mo</span>
                )}
              </p>
            </CardHeader>

            <CardContent className="flex-1 px-8">
              <ul role="list" className="space-y-4 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-8 pt-4">
              <Button
                variant={tier.popular ? 'default' : 'outline'}
                className="w-full"
                aria-label={`Select the ${tier.name} plan`}
              >
                {tier.price === 'Contact us' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="mt-20 max-w-3xl mx-auto text-center text-muted-foreground text-sm">
        <p>
          All plans come with a 14-day free trial. No credit card required.
        </p>
      </section>
    </main>
  );
}
