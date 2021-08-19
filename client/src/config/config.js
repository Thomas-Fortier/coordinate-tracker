export default function getProxy() {
  return process.env.NODE_ENV === 'development' ? 
    'http://localhost:5000/api/v1/coordinates' : '/api/v1/coordinates';
}