export interface VaultExplorerPluginSettings {
	favoritePropertyName: string;
	urlPropertyName: string;
	sourcePropertyName: string;
	revisionPropertyName: string;
	statusPropertyName: string;
	filters: {
		folder: string;
		search: string;
		onlyFavorites: boolean;
		onlyCreatedToday: boolean;
		onlyModifiedToday: boolean;
	}
}

export type onSettingsChange = (value: VaultExplorerPluginSettings) => void;
