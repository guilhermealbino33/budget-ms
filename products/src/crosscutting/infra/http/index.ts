import http from '../../config/http';
import { app } from './express/app';

app.listen(http.port, () => {
  console.log(`Server listening at port ${http.port}`);
});
