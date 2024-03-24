/* API endpoint to fetch task groups */
const API_ENDPOINT: string =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress';

/**
 * Fetch task groups from API and store in state.
 */
export async function fetchTaskGroups() {
  try {
    const response = await fetch(API_ENDPOINT);
    if (response.ok) {
      const taskGroups = await response.json();
      return taskGroups;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching task groups:', error);
  }
}
