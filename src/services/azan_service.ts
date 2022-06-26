import {defautlAdhanAssetId} from '@/assets/adhan_entries';
import {destroy, play, stop} from '@/services/play_sound';
import {settings} from '@/store/settings';

export async function playAdhan() {
  let adhanFilePath: string | number =
    settings.getState()['SELECTED_ADHAN_ENTRY']?.filepath ||
    defautlAdhanAssetId;

  return await play(adhanFilePath);
}

export async function stopAdhan() {
  await stop();
  await destroy();
}
