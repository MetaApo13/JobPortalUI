// src/pages/Plans.tsx
import { BadgeCheck, X, CheckCircle, Sparkles, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: 499,
    duration: '1 Month',
    icon: <BadgeCheck className="text-blue-500 h-8 w-8" />,
    description: [
      'Get started with essential tools.',
      'Access job listings anytime.',
      'Limited visibility, but enough to begin.',
      'Perfect for startups or solo recruiters.',
    ],
    features: {
      visibility: 'Standard',
      jobPosts: 5,
      support: 'Email Support',
      branding: 'No',
      analytics: 'Basic',
      resumeViews: 25,
    },
  },
  {
    name: 'Standard',
    price: 999,
    duration: '3 Months',
    icon: <CheckCircle className="text-green-500 h-8 w-8" />,
    description: [
      'More reach and job exposure.',
      'Better visibility on job searches.',
      'Ideal for growing companies.',
      'More control and access.',
    ],
    features: {
      visibility: 'High',
      jobPosts: 15,
      support: 'Priority Email',
      branding: 'Partial',
      analytics: 'Standard',
      resumeViews: 75,
    },
  },
  {
    name: 'Plus',
    price: 1999,
    duration: '6 Months',
    icon: <Sparkles className="text-purple-500 h-8 w-8 animate-bounce" />,
    description: [
      'Advanced access with smart insights.',
      'Better branding & higher reach.',
      'Tailored to mid-sized teams.',
      'Everything you need, in one place.',
    ],
    features: {
      visibility: 'Top Priority',
      jobPosts: 50,
      support: 'Live Chat & Email',
      branding: 'Full',
      analytics: 'Advanced',
      resumeViews: 250,
    },
  },
  {
    name: 'Premium',
    price: 3499,
    duration: '1 Year',
    icon: <Rocket className="text-yellow-500 h-8 w-8 animate-pulse" />,
    description: [
      'Ultimate plan with premium tools.',
      'Full visibility across the platform.',
      'Real-time data and branding boosts.',
      'Best for agencies and enterprises.',
    ],
    features: {
      visibility: 'Featured & Sponsored',
      jobPosts: 'Unlimited',
      support: 'Dedicated Manager',
      branding: 'Full + Boosted',
      analytics: 'Real-time + Custom Reports',
      resumeViews: 'Unlimited',
    },
  },
];

type FeatureKey = 'visibility' | 'jobPosts' | 'support' | 'branding' | 'analytics' | 'resumeViews';

const featureLabels: { label: string; key: FeatureKey }[] = [
  { label: 'Visibility', key: 'visibility' },
  { label: 'Job Posts', key: 'jobPosts' },
  { label: 'Support', key: 'support' },
  { label: 'Branding', key: 'branding' },
  { label: 'Analytics', key: 'analytics' },
  { label: 'Resume Views', key: 'resumeViews' },
];

export default function Plans() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Branding */}
      <div className="text-2xl font-bold text-purple-700 mb-8">CVSynk - Choose Your Plan</div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-start">
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{plan.duration}</p>
              <p className="text-2xl font-bold text-purple-600 mb-4">₹{plan.price}</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                {plan.description.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
              <Button className="mt-auto w-full" variant="default">Select Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Comparison */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Compare Plans</h2>
        <div className="overflow-auto rounded-lg border">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-100 border-b text-left">
              <tr>
                <th className="p-3">Feature</th>
                {plans.map(plan => (
                  <th key={plan.name} className="p-3">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
  {featureLabels.map(({ label, key }) => (
    <tr key={key} className="border-b">
      <td className="p-3 font-medium">{label}</td>
      {plans.map(plan => {
        const value = plan.features[key];
        return (
          <td key={plan.name + key} className="p-3">
            {value !== undefined
              ? typeof value === 'string' || typeof value === 'number'
                ? value
                : <X className="text-red-500 w-4 h-4" />
              : <X className="text-red-500 w-4 h-4" />}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
