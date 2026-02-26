/**
 * Shared Contact types used across all projects.
 * Each project can import or copy these as needed.
 */

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
  tags?: string[];
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateContactDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
  tags?: string[];
}

export interface UpdateContactDto extends Partial<CreateContactDto> {
  isFavorite?: boolean;
}

export interface ContactSearchResult {
  contacts: Contact[];
  total: number;
  page: number;
  pageSize: number;
}
