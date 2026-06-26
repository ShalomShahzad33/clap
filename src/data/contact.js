import { Mail, MapPin, Phone } from 'lucide-react';
import { organization } from '../constants/organization.js';

export const contactMethods = [
  { label: 'Email', value: organization.email, href: `mailto:${organization.email}`, icon: Mail },
  { label: 'Phone', value: organization.phone, href: `tel:${organization.phone.replaceAll(' ', '')}`, icon: Phone },
  { label: 'Address', value: organization.address, href: null, icon: MapPin },
];
