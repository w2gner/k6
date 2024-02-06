import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  gracefulStop: '30s',
  stages: [
    { target: 20, duration: '15s' },
    { target: 20, duration: '1m' },
    { target: 0, duration: '15s' },
  ],
};

export default function() {
  http.get('https://wagnerghedin.com');
  sleep(1);
}