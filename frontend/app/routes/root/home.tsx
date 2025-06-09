import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PMS" },
    { name: "description", content: "Welcome to Project Management Sytem!" },
  ];
}

const HomePage = () => {
  return (
    <div>
     <Button variant={'secondary'} onClick={() => alert('Hey Sexyy')}>Hello</Button>
    </div>
  )
}

export default HomePage
