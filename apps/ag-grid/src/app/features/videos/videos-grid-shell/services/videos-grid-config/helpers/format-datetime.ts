import * as moment from 'moment';
import { mf_datetime } from '@ag-grid-workspace/shared';

export function formatDatetime(datetime: string): string {
  return moment(datetime).format(mf_datetime);
}
