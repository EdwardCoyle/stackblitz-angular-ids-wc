import { TestBed } from '@angular/core/testing';
import { IdsSkipLinkComponent } from './ids-skip-link.component';
describe('IdsSkipLinkComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsSkipLinkComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsSkipLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-skip-link.component.spec.js.map