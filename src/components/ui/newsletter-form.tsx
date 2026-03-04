import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-12 rounded-full px-6"
        required
      />
      <Button type="submit" variant="pill" className="h-12 px-8">
        Subscribe
      </Button>
    </form>
  );
}