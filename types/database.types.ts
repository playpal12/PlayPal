export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			profiles: {
				Row: {
					id: string;
					username: string | null;
					full_name: string | null;
					avatar_url: string | null;
					role: string | null;
					inserted_at: string;
					updated_at: string;
				};
				Insert: {
					id: string;
					username?: string | null;
					full_name?: string | null;
					avatar_url?: string | null;
					role?: string | null;
					inserted_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					username?: string | null;
					full_name?: string | null;
					avatar_url?: string | null;
					role?: string | null;
					inserted_at?: string;
					updated_at?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}